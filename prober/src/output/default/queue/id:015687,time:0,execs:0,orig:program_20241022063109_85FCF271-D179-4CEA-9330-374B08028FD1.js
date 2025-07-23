function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new Uint16Array(3549);
const t4 = createGlobalObject().Float16Array;
const v11 = new t4(v7);
try { v11.toSorted(F0); } catch (e) {}
gc();
