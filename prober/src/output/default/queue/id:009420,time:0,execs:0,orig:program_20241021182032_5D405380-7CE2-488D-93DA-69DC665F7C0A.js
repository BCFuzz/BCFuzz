const v1 = ("MIN_SAFE_INTEGER").constructor;
let v2;
try { v2 = v1.raw(); } catch (e) {}
const v4 = new Uint16Array(v2, v1, v1);
v4.slice(v2);
gc();
