class C1 {
}
const v2 = new C1();
function f3(a4) {
    const v6 = new SharedArrayBuffer(a4, C1);
    try { new Float64Array(v6, C1, Infinity); } catch (e) {}
}
v2.toString = f3;
class C9 {
    static [v2];
}
gc();
