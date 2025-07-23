const v5 = new ArrayBuffer(9);
const v7 = new DataView(v5);
const v9 = Symbol.iterator;
const o26 = {
    [v9]() {
        let v11 = 10;
        const o25 = {
            next() {
                v11--;
                const v15 = v11 == 0;
                const o24 = {
                    "done": v15,
                    __proto__: this,
                    "maxByteLength": 473,
                    "maxByteLength": 0,
                    "maxByteLength": 0,
                    "b": v11,
                    "maxByteLength": 12,
                    n(a17, a18, a19) {
                        return v11;
                    },
                    "maxByteLength": 473,
                    n(a21, a22, a23) {
                        return 0;
                    },
                };
                return o24;
            },
        };
        return o25;
    },
};
for (let i30 = 0, i31 = 10 + 10; i31--, i30 < i31;) {
    let v38 = v7.getFloat64();
    for (let v39 of "4096") {
        [v39,v39,...v38] = o26;
    }
}
for (let v40 = 0; v40 < 10; v40++) {
    const v42 = createGlobalObject();
    v42.EvalError;
    v42.WeakMap;
    v42.Atomics;
}
gc();
