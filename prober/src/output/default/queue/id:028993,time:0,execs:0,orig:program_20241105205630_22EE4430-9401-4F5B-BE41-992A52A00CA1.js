const v1 = [65536,65536];
const t1 = createGlobalObject().Float16Array;
const v6 = new t1(v1);
const v8 = new Uint8ClampedArray(v6.buffer);
v8.set(v6);
gc();
