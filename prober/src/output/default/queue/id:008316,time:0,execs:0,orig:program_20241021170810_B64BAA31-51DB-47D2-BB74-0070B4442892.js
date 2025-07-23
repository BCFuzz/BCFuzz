function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0();
const v8 = new ArrayBuffer(v6, v6);
const v10 = new DataView(v8);
try { v10.setBigUint64(v6, v6); } catch (e) {}
gc();
