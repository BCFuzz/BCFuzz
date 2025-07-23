for (let i2 = -3, i3 = 10;
    i2 < i3;
    (() => {
        i3--;
        const v10 = Symbol.iterator;
        const o21 = {
            [v10]() {
                let v12 = 10;
                const o20 = {
                    next() {
                        v12--;
                        const v16 = v12 == 0;
                        const v17 = [536870887,8,16,2,9223372036854775807,-1,-753573948,4096,-59847];
                        v17[11] = 0;
                        v17[9] = v16;
                        v17.push(v17, v12);
                        const o19 = {
                            "done": v16,
                        };
                        return o19;
                    },
                };
                return o20;
            },
        };
        Reflect.construct(Uint8ClampedArray, [o21]);
    })()) {
}
gc();
