const v2 = new Int8Array(223);
Reflect.defineProperty(v2, 127, v2);
gc();
