const t0 = createGlobalObject().Float16Array;
const v4 = new t0(Uint8Array, Uint8Array);
const v6 = new Uint8Array(v4.buffer);
v6.set(v4);
gc();
