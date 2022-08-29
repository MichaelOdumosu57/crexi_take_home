// angular
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// misc
import { UtilService } from '@core/utils/utility.service';
import { env } from 'src/environments/environment';
// rxjs
import { fromEvent, Subject } from 'rxjs';
import { tap, takeUntil, filter } from 'rxjs/operators';

// three.js
import { removeAll, Tween, update } from 'content/scripts/tween.js/tween';
import { MathUtils, Scene, Color, AmbientLight, DirectionalLight, BoxGeometry, Mesh, MeshLambertMaterial, WebGLRenderer, TextureLoader, SphereGeometry, MeshStandardMaterial, PerspectiveCamera } from 'three';
import { CinematicCamera } from 'three/examples/jsm/cameras/CinematicCamera';

// store
import { AppState } from '@store/reducers';
import { ProfileActions, ProfileSelectors } from '@features/profile/store';
import { Store } from '@ngrx/store';




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
  currentUser$= this.store.select(ProfileSelectors.getUserProfile)
  constructor(
    private renderer2: Renderer2,
    private el: ElementRef,
    private utilService: UtilService,
    private router: Router,
    private store:Store<AppState>
  ) { }


  getCoordsOfCurrentUsersLocation(){
    let endpoint = "https://api.mapbox.com/geocoding/v5/mapbox.places/Las%20Vegas.json?access_token=pk.eyJ1IjoibWljaGFlbG9kdW1vc3U1NyIsImEiOiJjajB5Nzl6ODMwMmVlMzJwZXVqdmtlbGs1In0.YWZAMCT9m7su01RofBiQmQ"
  }

  ngOnInit(): void {
    this.initThreeJs()
    this.animate();
    this.updateEarthsPositions().subscribe()
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

  updateEarthsPositions() {
    return this.router.events
      .pipe(
        takeUntil(this.ngUnsub),
        filter((evt) => evt instanceof NavigationEnd),
        tap((evt: NavigationEnd) => {
          console.log(evt.url)
          // console.log(evt.url.match(/^\/\profiles/))
          removeAll()

          let finalPosition = evt.url.match(/^\/\profiles/) ? env.threeJSBackground.cameraProfilesPosition : env.threeJSBackground.cameraProfilePosition
          console.log(finalPosition)
          new Tween(this.camera.position)
            .to(
              finalPosition,
              1200
            )
            .start()


        })
      )

  }




  initPlanetEarth() {
    new TextureLoader().load(
      "content/img/earth.jpg",
      (result) => {

        let geometry = new SphereGeometry(7, 64, 64);
        let material = new MeshStandardMaterial({ map: result });
        this.planetEarth = new Mesh(geometry, material);

        this.planetEarth.position.set(0, 0, 0);
        this.planetEarth.rotateX(-75);
        this.scene.add(this.planetEarth);
      }, () => { }, console.log
    );
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

    this.planetEarth?.rotateY(0.005)
    this.planetEarth?.rotateX(0.005)
    this.renderer.render(this.scene, this.camera);
  }
  
  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}
