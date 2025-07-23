let v0 = 65536n;
const v1 = v0 << v0;
const v2 = v0--;
v2 + ~(v1 ^ v2);
gc();
