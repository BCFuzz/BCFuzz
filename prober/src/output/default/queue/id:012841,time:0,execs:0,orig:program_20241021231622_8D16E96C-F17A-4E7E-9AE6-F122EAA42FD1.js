for (let v1 = 0; v1 < 5; v1++) {
    const v4 = Symbol.iterator;
    const o16 = {
        [v4]() {
            let v6 = 10;
            const o12 = {
                next() {
                    v6--;
                    const v10 = v6 == 0;
                    const o11 = {
                        "done": v10,
                    };
                    return o11;
                },
            };
            function f14(a15) {
                return o12;
            }
            const t18 = "subarray";
            t18[f14] ^= Infinity;
            return o12;
        },
    };
    Reflect.construct(Uint8ClampedArray, [o16]);
}
gc();
