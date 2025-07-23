const v2 = new Uint16Array(8);
const v3 = v2.fill(v2, 8);
v3.subarray();
v3.set(8);
gc();
