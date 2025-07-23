for (let v0 = 0; v0 < 10; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let i7 = 0, i8 = 10;
        i8++, i7 < i8;
        (() => {
            i8--;
            class C15 {
                constructor(a17) {
                    ("c" + a17) + a17;
                }
            }
            new C15(F1);
        })()) {
        i8--;
    }
}
gc();
