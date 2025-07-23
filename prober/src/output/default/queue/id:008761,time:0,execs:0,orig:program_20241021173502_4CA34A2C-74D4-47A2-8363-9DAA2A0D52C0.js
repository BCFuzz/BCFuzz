for (let i2 = -3, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const v10 = Symbol.iterator;
        const o19 = {
            [v10]() {
                let v12 = 10;
                const o18 = {
                    next() {
                        v12--;
                        const v16 = v12 == 0;
                        const o17 = {
                            "done": v16,
                        };
                        return o17;
                    },
                };
                return o18;
            },
        };
        Reflect.construct(Uint8ClampedArray, [o19]);
    })()) {
}
gc();
