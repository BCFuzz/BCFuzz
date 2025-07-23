const v2 = new Float64Array(Uint16Array);
const v4 = new Uint8ClampedArray(v2);
const t2 = v4.constructor;
new t2(v2);
gc();
