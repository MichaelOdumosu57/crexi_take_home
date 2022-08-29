import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UtilService } from '@core/utils/utility.service';
import { env } from 'src/environments/environment';

// three.js
import {MathUtils,Scene,Color,AmbientLight,DirectionalLight,BoxGeometry,Mesh,MeshLambertMaterial,WebGLRenderer, TextureLoader}   from 'three' ;
import { CinematicCamera } from 'three/examples/jsm/cameras/CinematicCamera';


@Component({
  selector: 'app-threejs-background',
  templateUrl: './threejs-background.component.html',
  styleUrls: ['./threejs-background.component.scss']
})
export class ThreejsBackgroundComponent implements OnInit {

  camera!: CinematicCamera;
  scene!: Scene
  renderer!:WebGLRenderer
  constructor(
    private renderer2:Renderer2,
    private el:ElementRef,
    private utilService:UtilService
  ) { }

  ngOnInit(): void {
    this.initThreeJs()
  }

  initThreeJs() {

    this.camera = new CinematicCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.setLens(5);
    this.camera.position.set(
      env.threeJSBackground.cameraStart.x,
      env.threeJSBackground.cameraStart.y,
      env.threeJSBackground.cameraStart.z
    );


    this.scene = new Scene();
    let spaceTexture = new TextureLoader().load(
      "content/img/pexels-peng-liu-169647.jpg",
      (result)=>{
          this.scene.background = result
      },()=>{},console.log,
  );
    this.scene.add(new AmbientLight(0xffffff, 0.3));
    let light = new DirectionalLight(0xffffff, 0.35);
    light.position.set(1, 1, 1).normalize();
    this.scene.add(light);



    this.applyCanvasToDisplayDiv();
    // this.resizeCanvasOnWindowResize().subscribe();

  }

  applyCanvasToDisplayDiv = () => {
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    // this.setCanvasDimsBasedOnDisplayDiv();
    this.renderer2.appendChild(this.el.nativeElement, this.renderer.domElement);
  }

  retrieveDimsOfDisplayElement = () => {

    let displayDivWidth =  this.utilService.numberParse(getComputedStyle(this.el.nativeElement).width);
    let displayDivHeight = this.utilService.numberParse(getComputedStyle(this.el.nativeElement).height);
    return { displayDivWidth, displayDivHeight };
  }

  setCanvasDimsBasedOnDisplayElement = () => {
    let { displayDivWidth, displayDivHeight } = this.retrieveDimsOfDisplayElement();
    this.renderer.setSize(displayDivWidth, displayDivHeight);
  }

}
