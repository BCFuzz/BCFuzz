const v1 = [-4096,-546180325,14589,268435440];
Object.defineProperty(v1, 4, { writable: true, value: 259059835 });
const v3 = new Proxy(v1, v1);
try { v3.splice(v3); } catch (e) {}
gc();
