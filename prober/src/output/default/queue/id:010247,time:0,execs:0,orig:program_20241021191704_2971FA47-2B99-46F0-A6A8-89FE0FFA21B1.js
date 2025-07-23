const v1 = new Float64Array(Float64Array);
ArrayBuffer.maxByteLength = v1;
const v3 = new ArrayBuffer(ArrayBuffer, ArrayBuffer);
const v5 = new DataView(v3);
try { v5.getFloat64(v3); } catch (e) {}
gc();
