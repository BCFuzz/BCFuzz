function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F1("10", F1, "10", "10");
const v9 = new ArrayBuffer();
const v11 = new DataView(v9);
try { v11.setBigUint64(v7, "10"); } catch (e) {}
gc();
