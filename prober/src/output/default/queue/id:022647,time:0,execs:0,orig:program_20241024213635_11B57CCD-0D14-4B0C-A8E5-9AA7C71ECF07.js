const v2 = new Int16Array(6);
const v4 = new Uint8ClampedArray(v2);
const v6 = new Float64Array(v4);
v6.constructor = Int16Array;
v6.slice();
gc();
