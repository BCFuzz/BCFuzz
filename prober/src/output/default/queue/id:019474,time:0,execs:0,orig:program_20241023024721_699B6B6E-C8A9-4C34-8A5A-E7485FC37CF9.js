class C0 {
}
function f1() {
    gc();
    return C0;
}
for (let v4 = 0; v4 < 10; v4++) {
    class C5 extends f1 {
    }
    new C5();
}
gc();
