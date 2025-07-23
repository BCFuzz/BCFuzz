const v2 = Symbol.iterator;
const o11 = {
    [v2]() {
        let v4 = 10;
        const o10 = {
            next() {
                v4--;
                const v8 = v4 == -19853;
                const o9 = {
                    "done": v8,
                };
                return o9;
            },
        };
        return o10;
    },
};
new Int32Array(o11);
gc();
