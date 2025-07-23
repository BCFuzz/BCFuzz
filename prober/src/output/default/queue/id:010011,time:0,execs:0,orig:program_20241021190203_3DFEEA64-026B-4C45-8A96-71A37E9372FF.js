let v1 = Int8Array;
const v3 = new Uint32Array();
const v4 = v1++;
v3.fill(v4, v4, "-34442");
gc();
