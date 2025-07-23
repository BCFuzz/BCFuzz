const v2 = new Int32Array(1024, 1024, 1024);
const v3 = [452.60195304741774,0.4520554051252149,-9.652562601008477e+307];
v3[512] = 1024;
v3.push(v2);
eval(JSON.stringify(v3));
gc();
