const v1 = new Float32Array(Float32Array);
const v2 = v1.__proto__;
try { v1.set(v2); } catch (e) {}
for (let i6 = 0, i7 = 10; i6 !== i7; i7--) {
}
gc();
