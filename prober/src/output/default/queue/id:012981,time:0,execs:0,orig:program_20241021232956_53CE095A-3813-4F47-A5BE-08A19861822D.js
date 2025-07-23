function f0() {
    class C1 {
        #o(a3) {
        }
    }
    const v4 = new C1();
    const t6 = v4.constructor;
    new t6();
    for (let v7 = 0; v7 < 25; v7++) {
        class C8 extends C1 {
        }
        new C8();
        new C8();
        new C8();
    }
    return f0;
}
f0();
f0();
f0();
class C15 {
}
const v16 = new C15();
v16.valueOf = f0;
v16.valueOf(v16);
gc();
