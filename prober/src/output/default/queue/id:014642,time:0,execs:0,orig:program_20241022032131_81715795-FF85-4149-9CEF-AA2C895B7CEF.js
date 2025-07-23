const v1 = new WeakSet();
const v3 = [-4096,-546180325,14589,268435440];
v3.defineProperty = Date;
const v5 = new Proxy(v3, v3);
const v6 = new Proxy(v5, v5);
Object.defineProperty(v6, "getOwnPropertyDescriptor", { writable: true, enumerable: true, value: v1 });
gc();
