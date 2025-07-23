const v2 = ([8]).slice();
let v4;
try { v4 = ArrayBuffer.apply(); } catch (e) {}
const v6 = new ArrayBuffer(15);
const v8 = new DataView(v6);
v8.setFloat32(8, v2, v4);
gc();
