const v2 = new Uint8ClampedArray(4294967296);
const v4 = this.Int32Array;
try { v4.from(v2); } catch (e) {}
gc();
