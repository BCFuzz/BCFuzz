class C1 {
}
function f2(a3) {
    return "throw";
}
const v4 = new C1();
v4.toString = f2;
try { Map.constructor(v4); } catch (e) {}
gc();
