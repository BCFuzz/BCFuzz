for (let i = 0; i < 10; i++) {
    for (let i2 = 0, i3 = 10;
        i2 < i3;
        (() => {
            const v7 = /a(?!b)/mdis;
            function f8() {
                v7["test"](..."test");
                return i3;
            }
            f8();
            i3--;
        })()) {
    }
}
gc();
