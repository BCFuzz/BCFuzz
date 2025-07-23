class C0 {
}
class C1 extends C0 {
    toString(a3, a4, a5, a6) {
        for (let v7 = 0; v7 < 50; v7++) {
            super[a4] = a3;
        }
    }
}
const v8 = new C1();
let v9 = new C1();
v9 **= v8;
gc();
