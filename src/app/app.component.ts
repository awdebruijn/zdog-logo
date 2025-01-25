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
    let illo = new Zdog.Illustration({
      // set canvas with selector
      element: '.zdog-canvas',
      dragRotate: true,
    });

    const rotation = new Zdog.Vector({ x: Zdog.TAU / 4, z: Zdog.TAU / 4 });

    const cone1 = new Zdog.Cone({
      addTo: illo,
      diameter: 40 * Math.sqrt(2),
      length: 40,
      color: '#062970',
      backface: '#fff',
      rotate: rotation,
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
      cone1.rotate.y = tween * Zdog.TAU;
      // triangle2.rotate.z = (tween * Zdog.TAU) / 2;
      // triangle2.rotate.x = (tween * Zdog.TAU) / 2;
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
