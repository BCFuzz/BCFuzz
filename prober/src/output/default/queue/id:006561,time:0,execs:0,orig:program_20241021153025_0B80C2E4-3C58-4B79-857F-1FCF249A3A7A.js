function f0() {
    class C1 {
        #o(a3) {
        }
    }
    for (let v4 = 0; v4 < 32; v4++) {
        class C5 extends C1 {
        }
        new C5();
        new C5();
        new C5();
    }
    return f0;
}
f0();
f0();
f0();
gc();
