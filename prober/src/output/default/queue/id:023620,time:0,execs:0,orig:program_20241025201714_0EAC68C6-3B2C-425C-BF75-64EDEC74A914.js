const v2 = new Uint8ClampedArray(3016);
const v4 = 256 >> 256;
let v5 = 5;
const v7 = v2.with(v4, v5++);
const t4 = createGlobalObject().Float16Array;
new t4(v7);
gc();
