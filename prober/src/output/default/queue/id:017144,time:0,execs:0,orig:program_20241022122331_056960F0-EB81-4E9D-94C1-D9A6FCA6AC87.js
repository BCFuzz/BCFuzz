function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
F0.prototype = F0;
const v3 = new F0();
const t5 = createGlobalObject().Float16Array;
const v7 = new t5();
try { v7.join(v3); } catch (e) {}
gc();
