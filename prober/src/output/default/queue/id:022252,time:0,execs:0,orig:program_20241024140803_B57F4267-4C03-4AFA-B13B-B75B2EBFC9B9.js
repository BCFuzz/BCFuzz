let v1 = 65536n << 65536n;
const v2 = v1--;
v2 + ~(v1 ^ v2);
gc();
