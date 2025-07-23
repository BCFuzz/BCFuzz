const v3 = Symbol.iterator;
const o8 = {
    [v3]() {
        const o7 = {
            next() {
                const o6 = {
                    "done": 1000000.0,
                };
                return o6;
            },
        };
        return o7;
    },
};
Reflect.construct(Uint8ClampedArray, [o8]);
gc();
