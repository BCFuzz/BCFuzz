function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v5 = new Uint8Array(1073741824);
const v7 = /a+(?:ab)|cde(a)?/vgi.constructor;
try { v7(v2, v5); } catch (e) {}
gc();
