import * as Zdog from 'zdog';

export const Triangle = new Zdog.Shape({
  stroke: false,
  fill: true,
  color: '#062970',
  path: [{ x: 40 }, { y: 40 }, { x: 0 }],
});

export class Prism {
  group: Zdog.Group;
  anchor: Zdog.Anchor;

  constructor(illo: Zdog.Anchor) {
    this.anchor = new Zdog.Anchor({ addTo: illo });
    this.group = new Zdog.Group({ addTo: this.anchor, updateSort: true });
    this.addShapes();
  }

  addShapes() {
    const triangleBack = Triangle.copy({ addTo: this.group, translate: { x: -20, y: -20, z: -20 } });
    const triangleFront = Triangle.copy({ addTo: this.group, translate: { x: -20, y: -20, z: 20 } });

    const leftSide = new Zdog.Rect({
      addTo: this.group,
      stroke: false,
      fill: true,
      color: '#2b9a27',
      width: 40,
      height: 40,
      translate: { x: -20, y: 0, z: 0 },
      rotate: { y: Zdog.TAU / 4 },
    });

    const angledSide = new Zdog.Shape({
      addTo: this.group,
      stroke: false,
      fill: true,
      color: '#fff',
      path: [
        { x: 20, y: -20, z: -20 },
        { x: 20, y: -20, z: 20 },
        { x: -20, y: 20, z: 20 },
        { x: -20, y: 20, z: -20 },
      ],
    });

    const topSide = new Zdog.Rect({
      addTo: this.group,
      stroke: false,
      fill: true,
      color: '#ff005b',
      width: 40,
      height: 40,
      translate: { x: 0, y: -20, z: 0 },
      rotate: { x: Zdog.TAU / 4 },
    });
  }
}
