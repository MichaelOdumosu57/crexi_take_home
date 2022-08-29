import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UtilService } from '@core/utils/utility.service';
import { update } from 'content/scripts/tween.js/tween';
import { env } from 'src/environments/environment';

// rxjs
import { fromEvent, Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

// three.js
import { MathUtils, Scene, Color, AmbientLight, DirectionalLight, BoxGeometry, Mesh, MeshLambertMaterial, WebGLRenderer, TextureLoader, SphereGeometry, MeshStandardMaterial } from 'three';
import { CinematicCamera } from 'three/examples/jsm/cameras/CinematicCamera';



@Component({
  selector: 'app-threejs-background',
  templateUrl: './threejs-background.component.html',
  styleUrls: ['./threejs-background.component.scss']
})
export class ThreejsBackgroundComponent implements OnInit {

  ngUnsub = new Subject();
  camera!: CinematicCamera;
  scene = new Scene();
  renderer!: WebGLRenderer
  planetEarth!:Mesh
  constructor(
    private renderer2: Renderer2,
    private el: ElementRef,
    private utilService: UtilService
  ) { }



  ngOnInit(): void {
    this.initThreeJs()
    this.animate();
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
    this.resizeCanvasOnWindowResize().subscribe();

  }



  onWindowResize = () => {

    let { displayDivWidth, displayDivHeight } = this.retrieveDimsOfDisplayElement()
    this.camera.aspect = displayDivWidth / displayDivHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(displayDivWidth, displayDivHeight);

  }

  initPlanetEarth() {
    new TextureLoader().load(
      "content/img/earth.jpg",
      (result) => {
        let geometry = new SphereGeometry(8,32,32);
        let material = new MeshStandardMaterial({ map: result });
        this.planetEarth = new Mesh(geometry, material);


        this.planetEarth.position.set(0,0,0);
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
    this.camera = new CinematicCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.setFocalLength(5);
    this.camera.position.set(
      env.threeJSBackground.cameraStart.x,
      env.threeJSBackground.cameraStart.y,
      env.threeJSBackground.cameraStart.z
    );
  }

  resizeCanvasOnWindowResize() {
    return fromEvent(window, 'resize')
      .pipe(
        takeUntil(this.ngUnsub),
        tap(this.onWindowResize)
      )
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
    update()

    this.planetEarth?.rotateY(0.005)
    this.planetEarth?.rotateX(0.005)
    this.renderer.render(this.scene, this.camera);
  }

}
