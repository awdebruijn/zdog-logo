import { Component, OnInit } from '@angular/core';
import * as Zdog from 'zdog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'zdog';

  ngOnInit() {
    const illo = new Zdog.Illustration({
      // set canvas with selector
      element: '.zdog-canvas',
      dragRotate: true,
    });

    const prism = new Zdog.Group({
      addTo: illo,
    });

    const triangleFront = new Zdog.Shape({
      addTo: prism,
      stroke: false,
      fill: true,
      color: '#062970',
      path: [{ x: 40 }, { y: 40 }, { x: 0 }],
      translate: { z: 20 },
    });

    const triangleBack = triangleFront.copy({
      translate: { z: -20 },
      color: '#062970',
      addTo: prism,
    });

    const triangleTop = new Zdog.Shape({
      addTo: prism,
      stroke: false,
      fill: true,
      color: '#f0f',
      path: [
        { x: 0, y: 0, z: -20 },
        { x: 0, y: 0, z: 20 },
        { x: 40, y: 0, z: 20 },
        { x: 40, y: 0, z: -20 },
      ],
    });

    const triangleLeft = new Zdog.Shape({
      addTo: prism,
      stroke: false,
      fill: true,
      color: '#007bff',
      path: [
        { x: 0, y: 0, z: -20 },
        { x: 0, y: 0, z: 20 },
        { x: 0, y: 40, z: 20 },
        { x: 0, y: 40, z: -20 },
      ],
    });

    const triangleRight = new Zdog.Shape({
      addTo: prism,
      stroke: false,
      fill: true,
      color: '#04da13',
      path: [
        { x: 40, y: 0, z: -20 },
        { x: 40, y: 0, z: 20 },
        { x: 0, y: 40, z: 20 },
        { x: 0, y: 40, z: -20 },
      ],
    });

    // const triangle2 = new Zdog.Shape({
    //   addTo: illo,
    //   path: [
    //     { x: 40 }, // start at 1st point
    //     { y: 40 }, // line to 2nd point
    //     { x: 0 }, // line to 3rd point
    //   ],
    //   translate: { x: 50 },
    //   stroke: false,
    //   fill: true,
    //   color: '#062970',
    // });

    const box1 = new Zdog.Box({
      addTo: illo,
      width: 40,
      height: 40,
      depth: 40,
      translate: { x: 120, y: 20 },
      stroke: false,
      color: '#062970',
      leftFace: '#fff',
      rightFace: '#fff',
    });

    const cylinder = new Zdog.Cylinder({
      addTo: illo,
      diameter: 40,
      length: 40,
      translate: { x: 20, y: 65 },
      stroke: false,
      color: '#fff',
      frontFace: '#062970',
      backface: '#062970',
    });

    const box2 = new Zdog.Box({
      addTo: illo,
      width: 40,
      height: 40,
      depth: 40,
      translate: { x: 70, y: 65 },
      stroke: false,
      color: '#062970',
      leftFace: '#fff',
      rightFace: '#fff',
    });

    const box3 = new Zdog.Box({
      addTo: illo,
      width: 40,
      height: 40,
      depth: 40,
      translate: { x: 20, y: 110 },
      stroke: false,
      color: '#062970',
      leftFace: '#fff',
      rightFace: '#fff',
    });

    let ticker = 0;
    let cycleCount = 150;
    //illo.updateRenderGraph();

    function animate() {
      let progress = ticker / cycleCount;
      // apply easing to rotation
      let tween = Zdog.easeInOut(progress % 1, 3);
      box1.rotate.y = (tween * Zdog.TAU) / 2;
      cylinder.rotate.x = (tween * Zdog.TAU) / 2;
      box2.rotate.y = (tween * Zdog.TAU) / 2;
      box3.rotate.y = (tween * Zdog.TAU) / 2;
      ticker++;

      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }
    animate();
  }
}
