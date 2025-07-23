for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = i2 !== i3;
        class C5 {
        }
        for (let i = 0; i < 5; i++) {
            function f8(a9, a10, a11, a12) {
                const o13 = {
                    __proto__: a11,
                };
                o13[Symbol.toStringTag] = C5;
                return o13;
            }
            f8(2, "o", f8(f8, i3, v4, "o"));
        }
        return v4;
    })();
    i3--) {
}
gc();
