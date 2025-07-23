const v0 = [1436207052,268435440,536870887,65536,536870889,-65536,2147483648,4];
for (let v2 = 0; v2 < 5; v2++) {
    const v5 = Symbol.iterator;
    const o16 = {
        [v5]() {
            let v7 = 10;
            const o15 = {
                next() {
                    eval();
                    const v11 = v7--;
                    const v13 = v7 == 0;
                    const o14 = {
                        "c": 0,
                        ...this,
                        ...v0,
                        "d": v11,
                        "g": 1000000.0,
                        "done": v13,
                    };
                    return o14;
                },
            };
            return o15;
        },
    };
    Reflect.construct(Uint8ClampedArray, [o16]);
}
gc();
