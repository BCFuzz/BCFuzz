const v1 = new Int8Array(Int8Array);
function f2(a3, a4) {
    return a4();
}
v1.toString = f2;
class C6 {
}
const v7 = new C6();
v7.length = v1;
const v9 = new BigUint64Array();
try { v9.set(v7); } catch (e) {}
gc();
