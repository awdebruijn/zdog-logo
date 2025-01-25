import * as Zdog from 'zdog';

export const Triangle = new Zdog.Shape({
  stroke: false,
  fill: true,
  color: '#062970',
  path: [{ x: 40 }, { y: 40 }, { x: 0 }],
});

export class Prism {
  group: Zdog.Group;

  constructor(anchor: Zdog.Anchor) {
    this.group = new Zdog.Group({ addTo: anchor, updateSort: true });
    this.init();
  }

  init() {
    const triangleBack = Triangle.copy({ addTo: this.group, translate: { z: -20 } });
    const triangleFront = Triangle.copy({ addTo: this.group, translate: { z: 20 } });

    const triangleLeft = new Zdog.Rect({
      addTo: this.group,
      stroke: false,
      fill: true,
      color: '#fff',
      width: 40,
      height: 40,
      translate: { x: 0, y: 20, z: 0 },
      rotate: { y: Zdog.TAU / 4 },
    });

    const triangleAngled = new Zdog.Shape({
      addTo: this.group,
      stroke: false,
      fill: true,
      color: '#fff',
      path: [
        { x: 40, y: 0, z: -20 },
        { x: 40, y: 0, z: 20 },
        { x: 0, y: 40, z: 20 },
        { x: 0, y: 40, z: -20 },
      ],
    });

    const triangleTop = new Zdog.Rect({
      addTo: this.group,
      stroke: false,
      fill: true,
      color: '#fff',
      width: 40,
      height: 40,
      translate: { x: 20, y: 0, z: 0 },
      rotate: { x: Zdog.TAU / 4 },
    });
  }
}
