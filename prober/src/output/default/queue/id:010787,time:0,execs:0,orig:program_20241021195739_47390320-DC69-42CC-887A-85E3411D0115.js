const v1 = [-4096,-546180325,14589,268435440];
v1.defineProperty = Date;
const v3 = new Proxy(v1, v1);
v3.unshift();
gc();
