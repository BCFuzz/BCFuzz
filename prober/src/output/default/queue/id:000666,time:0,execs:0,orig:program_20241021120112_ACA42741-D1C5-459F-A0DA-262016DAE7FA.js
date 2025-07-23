function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = new Map();
v4.values();
const v7 = new Float32Array();
const v8 = v7.fill(Float32Array, v7, v7);
try { v8.sort(v2); } catch (e) {}
gc();
