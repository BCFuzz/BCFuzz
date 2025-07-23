const v2 = new Float64Array(837, 837, 837);
const v4 = v2.__proto__;
const v5 = new Float32Array();
class C6 {
}
const v7 = new C6();
const v8 = v7[0];
try { v5.copyWithin(v8, 837, v4); } catch (e) {}
gc();
