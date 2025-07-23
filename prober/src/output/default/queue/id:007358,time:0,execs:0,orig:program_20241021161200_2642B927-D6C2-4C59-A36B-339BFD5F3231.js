function f0() {
    class C1 {
        #o(a3) {
        }
    }
    C1.g = C1;
    for (let v4 = 0; v4 < 5; v4++) {
        class C5 extends C1 {
        }
        const v6 = C5.g;
        new v6(v6, C1, f0, C1);
        new C5();
        new C5();
        new C5();
    }
    return f0;
}
f0();
f0();
gc();
