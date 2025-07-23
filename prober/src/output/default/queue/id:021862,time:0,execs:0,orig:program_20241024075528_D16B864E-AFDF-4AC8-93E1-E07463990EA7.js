for (let i = 0; i < 10; i++) {
    for (let i2 = 0, i3 = 10;
        i2 < i3;
        (() => {
            const v7 = /sb?/mdis;
            function f8() {
                return v7["test"](..."test");
            }
            f8();
            i3--;
        })()) {
    }
}
gc();
