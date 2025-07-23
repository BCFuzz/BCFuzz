const v3 = new Float32Array(1022);
v3[848] = 4294967297;
new Uint32Array(v3);
gc();
