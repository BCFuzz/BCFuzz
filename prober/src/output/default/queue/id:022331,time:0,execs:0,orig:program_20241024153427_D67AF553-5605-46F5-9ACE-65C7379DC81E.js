class C0 {
}
class C2 {
    constructor(a4, a5, a6) {
        for (let i8 = 0, i9 = 127n;
            i8 < i9;
            (() => {
                arguments[Symbol.iterator] = C0;
                i9--;
            })()) {
        }
    }
}
new C2();
gc();
