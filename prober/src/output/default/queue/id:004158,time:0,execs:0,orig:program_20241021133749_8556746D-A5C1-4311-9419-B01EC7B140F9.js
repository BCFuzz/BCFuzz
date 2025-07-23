const v1 = new Uint8ClampedArray();
const v4 = new FinalizationRegistry(Int8Array);
v4.register(FinalizationRegistry, v1);
gc();
