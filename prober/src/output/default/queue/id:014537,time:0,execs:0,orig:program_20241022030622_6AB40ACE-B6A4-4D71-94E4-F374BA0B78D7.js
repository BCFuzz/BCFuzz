for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        for (let i = 0; i < 50; i++) {
            function f7() {
                function f8() {
                    return f8;
                }
                class C9 extends f8 {
                }
                C9[Symbol.iterator];
                return f7;
            }
            f7();
        }
        i3--;
    })()) {
}
gc();
