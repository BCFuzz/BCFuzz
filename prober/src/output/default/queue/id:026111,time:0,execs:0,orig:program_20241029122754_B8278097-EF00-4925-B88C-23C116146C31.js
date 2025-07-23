for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        for (let i = 0; i < 10; i++) {
            function f7() {
                return i3;
            }
            const v9 = f7.toString(i2, f7, f7, f7).includes;
            function F10() {
                if (!new.target) { throw 'must be called with new'; }
                function f12(a13) {
                    return i2;
                }
                function f14() {
                }
                f12.toString = f14;
                if (v9 != f12?.toString) {
                } else {
                }
            }
            new F10();
        }
        i3--;
    })()) {
}
gc();
