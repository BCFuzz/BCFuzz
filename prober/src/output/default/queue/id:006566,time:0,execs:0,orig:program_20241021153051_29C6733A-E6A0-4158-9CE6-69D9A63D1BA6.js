function f0() {
    class C1 {
        #o(a3) {
        }
    }
    for (let v4 = 0; v4 < 25; v4++) {
        class C5 extends C1 {
            static #g;
            f;
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
class C12 {
}
const v13 = new C12();
v13.valueOf = f0;
v13.valueOf();
gc();
