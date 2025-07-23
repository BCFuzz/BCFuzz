function f2() {
    return f2;
}
Int32Array.bind(-1000000000000.0);
const v6 = new Int32Array();
const v9 = new Uint32Array(4096);
try { v6.indexOf(Int32Array, v9, f2, 1); } catch (e) {}
gc();
