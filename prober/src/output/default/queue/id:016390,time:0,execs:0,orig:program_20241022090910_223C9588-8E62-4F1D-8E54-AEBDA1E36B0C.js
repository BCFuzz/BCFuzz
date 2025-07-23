const v2 = new ArrayBuffer();
Reflect.construct(DataView, [v2], Int32Array);
gc();
