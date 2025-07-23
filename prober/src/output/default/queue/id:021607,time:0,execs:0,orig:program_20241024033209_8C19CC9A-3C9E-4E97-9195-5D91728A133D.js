class C0 {
}
const v1 = new C0();
class C2 {
}
const v3 = new C2();
const v4 = v3.constructor;
const v5 = new v4(v3, v1, v3, v4);
const v6 = v5.constructor;
let v7;
try { v7 = new v6(v5, v4); } catch (e) {}
const v10 = new Int32Array(681);
function f11(a12, a13, a14, a15) {
    a14.length = a14;
    try { v7(v1); } catch (e) {}
    Math.log2(8);
    a12 + 769408193;
    v10[1] &= a12;
    return 681;
}
v10.map(f11);
gc();
