const v1 = [-4096,-546180325,14589,268435440];
const v3 = new Proxy(v1, v1);
v3.deleteProperty = "NEGATIVE_INFINITY";
try { v3.splice(v3); } catch (e) {}
gc();
