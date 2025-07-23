for (let i2 = 0, i3 = 10;
    i3++, i2 < i3;
    (() => {
        i3--;
        class C10 {
            constructor(a12) {
                ("c" + a12) + a12;
            }
        }
        new C10();
    })()) {
    i3--;
}
gc();
