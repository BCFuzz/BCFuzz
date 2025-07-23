const v3 = new Proxy(Int8Array, Symbol);
Reflect.preventExtensions(v3);
gc();
