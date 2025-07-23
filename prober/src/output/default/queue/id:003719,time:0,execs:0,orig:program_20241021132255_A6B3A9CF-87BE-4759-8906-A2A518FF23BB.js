class C0 {
}
function f1(a2, a3) {
    return C0;
}
C0[Symbol.toPrimitive] = f1;
const v7 = [C0];
const v8 = Date.toString();
try { v8.lastIndexOf(v7); } catch (e) {}
gc();
