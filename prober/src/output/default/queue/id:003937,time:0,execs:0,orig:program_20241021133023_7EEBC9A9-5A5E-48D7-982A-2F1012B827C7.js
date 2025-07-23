const v2 = new Float64Array(129);
v2[39] = v2;
const v4 = new Uint16Array(v2);
const t3 = v4.constructor;
new t3(v2);
gc();
