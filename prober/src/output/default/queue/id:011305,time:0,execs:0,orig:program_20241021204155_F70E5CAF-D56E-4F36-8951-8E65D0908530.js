for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
class C11 {
}
const v14 = C11[Symbol.species];
const o17 = {
    "maxByteLength": 268435441,
};
const v19 = new ArrayBuffer(140, o17);
v19.resize();
const v22 = new Int32Array();
const v23 = v22.constructor;
try { new v23(v19, v14, 6); } catch (e) {}
gc();
