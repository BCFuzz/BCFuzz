function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = F0.constructor;
const v6 = v5.toString(v5, v5);
const v8 = new Uint8ClampedArray();
v8.constructor = v6;
try { v8.slice(); } catch (e) {}
gc();
