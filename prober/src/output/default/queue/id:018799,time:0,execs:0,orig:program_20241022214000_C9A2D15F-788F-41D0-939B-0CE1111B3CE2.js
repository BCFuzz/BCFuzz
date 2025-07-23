function f0(a1) {
    return f0;
}
Symbol[Symbol.species] = f0;
const v5 = new Int32Array();
v5.constructor = Symbol;
try { v5.subarray(); } catch (e) {}
gc();
