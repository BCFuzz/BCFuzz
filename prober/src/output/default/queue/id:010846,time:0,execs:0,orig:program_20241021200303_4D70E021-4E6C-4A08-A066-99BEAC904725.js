function f2(a3) {
    a3[Symbol.match] = Int32Array;
    return Symbol;
}
Int32Array.toString = f2;
const v6 = new Int32Array();
try { v6.with(5, Int32Array); } catch (e) {}
gc();
