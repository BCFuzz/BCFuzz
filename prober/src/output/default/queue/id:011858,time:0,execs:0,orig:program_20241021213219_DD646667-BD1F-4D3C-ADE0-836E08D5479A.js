function f1() {
    return f1;
}
class C2 extends f1 {
    static n(a4, a5, a6) {
        a4[a6] = 184642.30965482467;
    }
}
const v9 = new Int32Array(681);
function f10(a11, a12, a13, a14) {
    let v15;
    try { v15 = C2.n(); } catch (e) {}
    return v15;
}
v9.map(f10);
gc();
