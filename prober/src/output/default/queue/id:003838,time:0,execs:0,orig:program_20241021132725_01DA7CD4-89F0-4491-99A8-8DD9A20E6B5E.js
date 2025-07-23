function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = v2.constructor;
v2[Symbol.iterator] = v3;
try { new Int32Array(v2); } catch (e) {}
gc();
