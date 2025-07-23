function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = new ArrayBuffer(9);
const v7 = new DataView(v5);
v7.getBigUint64(v2, v7);
gc();
