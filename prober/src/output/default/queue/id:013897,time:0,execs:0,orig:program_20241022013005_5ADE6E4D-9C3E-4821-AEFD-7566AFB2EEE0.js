function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const t3 = createGlobalObject().Float16Array;
const v8 = new t3(8);
try { v8.sort(F0); } catch (e) {}
gc();
