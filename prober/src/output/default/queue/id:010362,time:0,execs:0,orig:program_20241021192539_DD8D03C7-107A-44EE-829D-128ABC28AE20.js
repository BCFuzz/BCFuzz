class C0 {
}
const v3 = Symbol.iterator;
const o8 = {
    [v3]() {
        const o7 = {
            next() {
                const o6 = {
                    "done": C0,
                };
                return o6;
            },
        };
        return o7;
    },
};
new Int32Array(o8);
gc();
