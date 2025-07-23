class C0 {
}
class C1 extends C0 {
}
const v2 = new C1();
const t5 = v2.constructor;
new t5();
for (let v5 = 0; v5 < 500; v5++) {
    const v7 = Date(v5);
    class C8 extends Date {
        g;
        static [v7];
    }
    new C8();
}
gc();
