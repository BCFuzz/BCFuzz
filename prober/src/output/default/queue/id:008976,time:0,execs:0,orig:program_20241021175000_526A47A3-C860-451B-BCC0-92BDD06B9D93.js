function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
F0.prototype = F0;
const v4 = new F0(F0, F0);
const v6 = new ArrayBuffer(ArrayBuffer);
const v9 = new DataView(v6);
try { v9.setInt16(Symbol, v4); } catch (e) {}
gc();
