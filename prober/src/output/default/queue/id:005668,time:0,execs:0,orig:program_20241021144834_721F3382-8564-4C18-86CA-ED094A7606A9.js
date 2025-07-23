const v1 = new Uint8ClampedArray();
const v2 = [-9.794042680331625,NaN,-555.1860721122559,1000000.0,-1.0,0.3615809504474715,9.046121989344677];
const v3 = v2.toLocaleString(Uint8ClampedArray);
v3.small(v2, v3, v1, v1, Uint8ClampedArray).startsWith(v1);
gc();
