const v1 = new Int16Array();
const v3 = new Float32Array(v1, v1, Int16Array);
const v4 = v3.__proto__;
try { v1.set(v4); } catch (e) {}
for (let i8 = 0, i9 = 10; i8 !== i9; i9--) {
}
gc();
