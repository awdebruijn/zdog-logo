import { Component, OnInit } from '@angular/core';
import * as Zdog from 'zdog';
import { Prism } from './shapes';

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

    const prism1 = new Prism(illo);
    prism1.group.copy();
    prism1.group.translate.x = 20;
    prism1.group.translate.y = 20;

    const prism2 = new Prism(illo);
    prism2.group.copy();

    prism2.group.translate.x = 70;
    prism2.group.translate.y = 20;

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
      prism1.group.rotate.y = tween * Zdog.TAU;
      prism2.group.rotate.x = tween * Zdog.TAU;
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
