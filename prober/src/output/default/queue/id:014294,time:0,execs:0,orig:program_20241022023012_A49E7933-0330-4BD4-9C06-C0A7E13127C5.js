class C1 {
}
const v2 = new C1();
const v3 = new C1();
function f5(a6, a7, a8) {
    a7.toString = Symbol;
    -a7;
    return f5;
}
const v11 = f5(f5(v2, 268435439n), 268435439n);
const o17 = {
    n(a13, a14, a15) {
        a13(v11, v3);
        return a14;
    },
};
try { o17.n(f5); } catch (e) {}
gc();
