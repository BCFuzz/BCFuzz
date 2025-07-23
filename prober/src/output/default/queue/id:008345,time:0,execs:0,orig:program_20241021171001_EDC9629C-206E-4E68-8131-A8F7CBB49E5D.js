const v1 = new ArrayBuffer(ArrayBuffer, ArrayBuffer);
const v3 = new DataView(v1);
try { v3.getFloat32(v3); } catch (e) {}
const v5 = v3.__proto__;
try { v5.getUint8(ArrayBuffer, DataView, DataView, v3); } catch (e) {}
gc();
