let v1 = Uint32Array;
const v2 = new v1(128);
v1 >>= v1;
Object.defineProperty(v2, v1, { writable: true, value: 128 });
gc();
