for (let v0 = 0; v0 < 25; v0++) {
    const v3 = Symbol.iterator;
    const o12 = {
        [v3]() {
            let v5 = 10;
            const o11 = {
                next() {
                    v5--;
                    const v9 = v5 == 0;
                    const o10 = {
                        "done": v9,
                    };
                    return o10;
                },
            };
            return o11;
        },
    };
    Reflect.construct(Uint8ClampedArray, [o12]);
}
gc();
