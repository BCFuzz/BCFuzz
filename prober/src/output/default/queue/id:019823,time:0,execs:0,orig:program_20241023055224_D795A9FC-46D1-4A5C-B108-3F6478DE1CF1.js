function f1() {
    return -2.2250738585072014e-308;
}
Array.toString = f1;
const v4 = new Int8Array(Array);
const v5 = v4.slice();
try { v5.with(Array); } catch (e) {}
gc();
