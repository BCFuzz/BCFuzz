const o10 = {
    toString(a1, a2) {
        for (let v3 = 0; v3 < 100; v3++) {
            const v5 = new BigInt64Array();
            class C6 extends BigInt64Array {
                static #b = C6;
                static {
                    new this();
                    try {
                        v5.#b = v5;
                    } catch(e9) {
                    }
                }
            }
        }
        return a2;
    },
};
o10.toString(o10, o10);
gc();
