const v1 = new Uint32Array(Uint32Array);
for (let i4 = -3, i5 = 10; i4 < i5; i5--) {
}
class C13 {
}
const v16 = C13[Symbol.species];
const o19 = {
    "maxByteLength": 268435441,
};
const v21 = new ArrayBuffer(140, o19);
v21.resize();
const v23 = v1.constructor;
try { new v23(v21, v16, 6); } catch (e) {}
gc();
