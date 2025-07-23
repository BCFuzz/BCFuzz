const v3 = new Uint32Array(1024);
Reflect.construct(Uint32Array, v3);
gc();
