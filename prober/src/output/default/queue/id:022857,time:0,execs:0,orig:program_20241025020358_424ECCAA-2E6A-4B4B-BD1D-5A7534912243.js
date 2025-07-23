function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F2("10", 1000, "10", "10");
const v10 = new ArrayBuffer(1000);
const v12 = new DataView(v10);
v12.setBigUint64(v8, "10", 1000);
gc();
