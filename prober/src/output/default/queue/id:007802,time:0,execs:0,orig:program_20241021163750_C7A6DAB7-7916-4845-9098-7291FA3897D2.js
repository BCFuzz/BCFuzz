const v0 = [];
function f1() {
    return v0;
}
v0[Symbol.toPrimitive] = f1;
const v5 = new Int16Array(v0, Symbol, Symbol);
try { v5.subarray(v0); } catch (e) {}
gc();
