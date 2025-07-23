const v1 = new Int32Array();
v1.buffer.transferToFixedLength(v1, v1, v1, Int32Array);
const v4 = [Int32Array,Int32Array,Int32Array];
try { v4.slice(v1); } catch (e) {}
gc();
