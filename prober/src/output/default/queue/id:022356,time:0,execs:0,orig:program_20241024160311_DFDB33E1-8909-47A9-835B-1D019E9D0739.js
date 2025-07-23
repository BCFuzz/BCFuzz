function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (let i5 = 10, i6 = 10; -13369 !== i6; i6--) {
}
const v15 = new ArrayBuffer(9);
let v16;
try { v16 = v15.resize(); } catch (e) {}
const v18 = new DataView(v15);
v18.getBigUint64(v2, v16);
gc();
