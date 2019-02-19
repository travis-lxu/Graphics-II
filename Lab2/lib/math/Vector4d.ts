import { Vector3d } from './Vector3d';
import { Matrix } from './Matrix';

class Vector4d {
  x: number;
  y: number;
  z: number;
  w: number;

  constructor(x: number, y: number, z: number, w: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  collapse(): Vector3d {
    let t: number = this.w;
    return new Vector3d(this.x / t, this.y / t, this.z / t);
  }

  toMatrix(): Matrix {
    return new Matrix([
      [this.x],
      [this.y],
      [this.z],
      [this.w]
    ]);
  }
}

export { Vector4d };
