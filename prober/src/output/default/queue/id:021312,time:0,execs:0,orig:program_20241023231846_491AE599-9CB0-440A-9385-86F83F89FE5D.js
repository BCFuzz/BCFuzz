for (let i = 0; i < 10; i++) {
    for (let i2 = 0, i3 = 10;
        i2 < i3;
        (() => {
            const v7 = /(\xed\xb0\x80)\x01/mdis;
            function f8() {
                v7["test"](..."test");
                return "test";
            }
            f8();
            i3--;
        })()) {
    }
}
gc();
