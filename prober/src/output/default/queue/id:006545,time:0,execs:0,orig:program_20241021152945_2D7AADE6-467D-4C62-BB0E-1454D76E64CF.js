const v2 = new Float32Array(1022);
v2[848] = v2;
new Uint32Array(v2);
gc();
