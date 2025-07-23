function f0() {
    return f0;
}
const v3 = new Int32Array();
const v6 = new Uint32Array(4096);
try { v3.indexOf(Int32Array, ...v6, f0, ...1); } catch (e) {}
gc();
