function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
const v6 = new ArrayBuffer(9);
const v8 = new DataView(v6);
v8.getBigUint64(v3, 862.5615419034141);
gc();
