const v2 = new Float32Array(4, 4, 4);
Reflect.defineProperty(v2, 4, v2);
gc();
