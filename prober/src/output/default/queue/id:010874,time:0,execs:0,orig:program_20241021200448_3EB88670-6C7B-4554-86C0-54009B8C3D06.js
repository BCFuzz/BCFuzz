for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    const v11 = Symbol.iterator;
    const o25 = {
        [v11]() {
            let v13 = 10;
            const o24 = {
                next() {
                    v13--;
                    for (let v17 = 0; v17 < 5; v17++) {
                        const v20 = ("number").strike("number", v17, this);
                        v20.replace(undefined, v20);
                    }
                    const v22 = v13 == 0;
                    const o23 = {
                        "done": v22,
                    };
                    return o23;
                },
            };
            return o24;
        },
    };
    function f26(a27, a28) {
        const o34 = {
            toString(a30, a31) {
                new Set(a28);
                return a30;
            },
        };
        return o34.toString();
    }
    f26(f26, o25);
}
gc();
