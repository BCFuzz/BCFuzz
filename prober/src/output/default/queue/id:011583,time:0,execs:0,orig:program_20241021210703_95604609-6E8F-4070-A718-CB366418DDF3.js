const v0 = [];
function f1(a2, a3) {
    return v0;
}
v0[Symbol.toPrimitive] = f1;
const v7 = new Int8Array();
const v9 = v7.fill(f1, v7).sort(Symbol);
try { v9.copyWithin(v0); } catch (e) {}
gc();
