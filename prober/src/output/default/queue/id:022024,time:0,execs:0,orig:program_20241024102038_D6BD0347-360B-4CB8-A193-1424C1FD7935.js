for (let i2 = 0, i3 = 10;
    i2 !== i3;
    (() => {
        const v8 = ([-2147483648,-1024]).includes();
        for (let i11 = 0, i12 = 10;
            (() => {
                async function f13(a14, a15, a16) {
                    return a16;
                }
                for (let v17 = 0; v17 < 5; v17++) {
                    f13(i2, f13, i3);
                }
                return v8 < i12;
            })();
            i12--) {
        }
        i3--;
    })()) {
}
gc();
