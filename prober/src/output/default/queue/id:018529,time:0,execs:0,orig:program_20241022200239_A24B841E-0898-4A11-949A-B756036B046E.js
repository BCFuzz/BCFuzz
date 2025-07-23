class C1 extends Array {
}
const v2 = new C1();
for (let v3 = 0; v3 < 10; v3++) {
    for (let i6 = 0, i7 = 10;
        i6 < i7;
        (() => {
            i7--;
            class C13 extends v2.constructor {
            }
            new C13();
        })()) {
    }
}
gc();
