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

    const baseGroup = new Zdog.Group({
      addTo: illo,
      updateSort: true,
    });

    const prism1 = new Prism(baseGroup);
    prism1.group.copy();
    prism1.group.translate.x = 20;
    prism1.group.translate.y = 20;

    const prism2 = new Prism(baseGroup);
    prism2.group.copy();

    prism2.group.translate.x = 70;
    prism2.group.translate.y = 20;

    const box1 = new Zdog.Box({
      addTo: baseGroup,
      width: 40,
      height: 40,
      depth: 40,
      translate: { x: 120, y: 20 },
      stroke: false,
      color: '#062970',
      topFace: '#fff',
      bottomFace: '#fff',
      leftFace: '#ebf0ff',
      rightFace: '#ebf0ff',
    });

    const cylinder = new Zdog.Cylinder({
      addTo: baseGroup,
      diameter: 40,
      length: 40,
      translate: { x: 20, y: 65 },
      stroke: false,
      color: '#fff',
      frontFace: '#062970',
      backface: '#062970',
    });

    const box2 = new Zdog.Box({
      addTo: baseGroup,
      width: 40,
      height: 40,
      depth: 40,
      translate: { x: 70, y: 65 },
      stroke: false,
      color: '#062970',
      topFace: '#fff',
      bottomFace: '#fff',
      leftFace: '#ebf0ff',
      rightFace: '#ebf0ff',
    });

    const box3 = new Zdog.Box({
      addTo: baseGroup,
      width: 40,
      height: 40,
      depth: 40,
      translate: { x: 20, y: 110 },
      stroke: false,
      color: '#062970',
      topFace: '#fff',
      bottomFace: '#fff',
      leftFace: '#ebf0ff',
      rightFace: '#ebf0ff',
    });

    let rounds = 0;
    function update(progress: number) {
      const tween = Zdog.easeInOut(progress % 1, 3);

      if (rounds === 1) {
        prism1.group.rotate.x = tween * Zdog.TAU;
        prism2.group.rotate.z = tween * Zdog.TAU;
        box1.rotate.z = (tween * -Zdog.TAU) / 2;
        //cylinder.rotate.x = (tween * -Zdog.TAU) / 2;
        box2.rotate.x = (tween * Zdog.TAU) / 2;
        box3.rotate.z = (tween * Zdog.TAU) / 2;
      } else if (rounds === 2) {
        prism1.group.rotate.z = tween * Zdog.TAU;
        prism2.group.rotate.y = tween * Zdog.TAU;
        box1.rotate.x = (tween * Zdog.TAU) / 2;
        cylinder.rotate.y = (tween * Zdog.TAU) / 2;
        //box2.rotate.y = (tween * Zdog.TAU) / 2;
        box3.rotate.z = (tween * Zdog.TAU) / 2;
      } else {
        prism1.group.rotate.y = tween * Zdog.TAU;
        //prism2.group.rotate.x = tween * Zdog.TAU;
        box1.rotate.y = (tween * Zdog.TAU) / 2;
        cylinder.rotate.y = (tween * -Zdog.TAU) / 2;
        box2.rotate.z = (tween * -Zdog.TAU) / 2;
        //box3.rotate.x = (tween * Zdog.TAU) / 2;
      }

      const isWholeNumber = Math.floor((progress * 100) % 100) === 0;

      if (rounds === 3 && isWholeNumber) {
        rounds = 0;
      }

      if (isWholeNumber) {
        rounds++;
      }
    }

    let ticker = 0;
    let cycleCount = 100;

    function animate() {
      let progress = ticker / cycleCount;
      update(progress);
      ticker++;

      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }
    animate();
  }
}
