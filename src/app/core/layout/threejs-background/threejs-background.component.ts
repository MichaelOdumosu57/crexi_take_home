// angular
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// misc
import { UtilService } from '@core/utils/utility.service';
import { env } from 'src/environments/environment';
// rxjs
import { fromEvent, Subject } from 'rxjs';
import { tap, takeUntil, filter,pluck } from 'rxjs/operators';

// three.js
import { removeAll, Tween, update } from 'content/scripts/tween.js/tween';
import { MathUtils, Scene, Color, AmbientLight, DirectionalLight, BoxGeometry, Mesh, MeshLambertMaterial, WebGLRenderer, TextureLoader, SphereGeometry, MeshStandardMaterial, PerspectiveCamera, Vector3 } from 'three';
import { CinematicCamera } from 'three/examples/jsm/cameras/CinematicCamera';

// store
import {  ProfileSelectors } from '@features/profile/store';
import { Store } from '@ngrx/store';
import { ProfileState, UserProfile } from '@interfaces';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-threejs-background',
  templateUrl: './threejs-background.component.html',
  styleUrls: ['./threejs-background.component.scss']
})
export class ThreejsBackgroundComponent implements OnInit {

  ngUnsub = new Subject();
  camera!: PerspectiveCamera;
  scene = new Scene();
  renderer!: WebGLRenderer
  planetEarth!: Mesh
  currentUser$= this.store.select(ProfileSelectors.pickUserProfile)
  constructor(
    private renderer2: Renderer2,
    private el: ElementRef,
    private utilService: UtilService,
    private router: Router,
    private store:Store<ProfileState>,
    private http:HttpClient
  ) { }


  initShowCoordsOfCurrentUsersLocationOnPlanet(){
    return this.currentUser$
    .pipe(
      filter((user:UserProfile)=> user instanceof UserProfile),
      takeUntil(this.ngUnsub),
      tap((user)=>{
        let endpoint = env.endpoints.getLocationCoords("Las Vegas")
        this.getLocationCoords(endpoint).subscribe()
        
        
      })
    )

  }

  getLocationCoords=(endpoint:string)=>{
    return this.http.get(endpoint)
    .pipe(
      pluck("features","0","center"),
      tap((result:number[])=>{

        let cityLocation = new Vector3().setFromSphericalCoords(env.threeJSBackground.planetEarthRadians, result[1], result[0])
        console.log(cityLocation)
        this.planetEarth.rotateX(cityLocation.x)
        this.planetEarth.rotateY(cityLocation.y)
        this.planetEarth.rotateZ(cityLocation.z)
      })
    )
  }

  ngOnInit(): void {
    this.initThreeJs()
    this.animate();
    this.updateEarthsPosition().subscribe()
    this.initShowCoordsOfCurrentUsersLocationOnPlanet().subscribe()
  }

  initThreeJs() {

    this.initCamera();
    this.initBackground();
    this.initPlanetEarth();
    this.scene.add(new AmbientLight(0xffffff, 1.5));
    let light = new DirectionalLight(0xffffff, 0.35);
    light.position.set(1, 5, 1).normalize();
    this.scene.add(light);
    this.applyCanvasToDisplayDiv();

  }

  initPlanetEarth() {
    new TextureLoader().load(
      "content/img/earth.jpg",
      (result) => {

        let geometry = new SphereGeometry(env.threeJSBackground.planetEarthRadians, 64, 64);
        let material = new MeshStandardMaterial({ map: result });
        this.planetEarth = new Mesh(geometry, material);

        this.planetEarth.position.set(0, 0, 0);
        this.planetEarth.rotateX(-75);
        this.scene.add(this.planetEarth);
      }, () => { }, console.log
    );
  }

  updateEarthsPosition() {
    return this.router.events
      .pipe(
        takeUntil(this.ngUnsub),
        filter((evt) => evt instanceof NavigationEnd),
        tap((evt: NavigationEnd) => {
          
          removeAll()
          let finalPosition = evt.url.match(/^\/\profiles/) ? env.threeJSBackground.cameraProfilesPosition : env.threeJSBackground.cameraProfilePosition
          new Tween(this.camera.position)
            .to(
              finalPosition,
              1200
            )
            .start()


        })
      )

  }

  initBackground() {
    new TextureLoader().load(
      "content/img/pexels-peng-liu-169647.jpg",
      (result) => {
        this.scene.background = result;
      }, () => { }, console.log
    );
  }

  private initCamera() {
    this.camera = new CinematicCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.setFocalLength(5);
    this.camera.position.set(
      env.threeJSBackground.cameraProfilesPosition.x,
      env.threeJSBackground.cameraProfilesPosition.y,
      env.threeJSBackground.cameraProfilesPosition.z
    );
  }



  applyCanvasToDisplayDiv = () => {
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.setCanvasDimsBasedOnDisplayElement();
    this.renderer2.appendChild(this.el.nativeElement, this.renderer.domElement);
  }

  retrieveDimsOfDisplayElement = () => {

    let displayDivWidth = this.utilService.numberParse(getComputedStyle(this.el.nativeElement).width);
    let displayDivHeight = this.utilService.numberParse(getComputedStyle(this.el.nativeElement).height);
    return { displayDivWidth, displayDivHeight };
  }

  setCanvasDimsBasedOnDisplayElement = () => {
    let { displayDivWidth, displayDivHeight } = this.retrieveDimsOfDisplayElement();
    this.renderer.setSize(displayDivWidth, displayDivHeight);
  }

  animate = () => {

    requestAnimationFrame(this.animate);
    this.setCanvasDimsBasedOnDisplayElement()
    update()

    if(this.router.url.match(/^\/\profiles/)){
      this.planetEarth?.rotateY(0.005)
      this.planetEarth?.rotateX(0.005)
    }

    this.renderer.render(this.scene, this.camera);
  }
  
  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}
