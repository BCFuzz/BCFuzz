const v2 = new Uint8ClampedArray(5);
v2.sort();
const v6 = new Float64Array(v2);
v6.slice(Uint8ClampedArray, 127);
gc();
