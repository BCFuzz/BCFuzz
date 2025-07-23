class C0 {
}
const v1 = new C0();
function f2(a3, a4, a5) {
    gc.apply(v1, arguments);
    return f2;
}
f2(f2, f2);
gc();
