const v1 = new Int8Array(Int8Array, Int8Array, Int8Array);
v1.buffer.transfer();
class C4 {
}
const v5 = new C4();
try { v5.propertyIsEnumerable(v1); } catch (e) {}
gc();
