const v2 = new ArrayBuffer(ArrayBuffer, ArrayBuffer);
const v4 = new DataView(v2);
try { v4.getFloat64(-5.0); } catch (e) {}
const v6 = v4.__proto__;
try { v6.getFloat16(); } catch (e) {}
gc();
