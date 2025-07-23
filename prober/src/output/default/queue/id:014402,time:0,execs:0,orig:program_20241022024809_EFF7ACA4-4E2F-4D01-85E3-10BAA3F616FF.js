class C1 extends Array {
    #p(a3, a4, a5) {
    }
}
const v6 = new C1();
for (let v7 = 0; v7 < 10; v7++) {
    for (let i10 = 0, i11 = 10;
        i10 < i11;
        (() => {
            i11--;
            class C17 extends v6.constructor {
            }
            new C17();
        })()) {
    }
}
gc();
