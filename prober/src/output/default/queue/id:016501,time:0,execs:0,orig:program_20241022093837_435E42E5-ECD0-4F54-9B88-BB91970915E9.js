const v1 = new Int8Array();
Reflect.defineProperty(v1, 127, v1);
gc();
