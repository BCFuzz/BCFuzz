const v1 = ("RQ").trimStart();
const v3 = new Int32Array(v1, "RQ", "RQ");
v3.constructor = v1;
try { v3.slice(v1, "RQ"); } catch (e) {}
gc();
