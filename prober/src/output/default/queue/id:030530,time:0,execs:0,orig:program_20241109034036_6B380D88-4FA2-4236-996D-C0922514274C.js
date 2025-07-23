const v6 = new ArrayBuffer(9);
const v8 = new DataView(v6);
const v10 = Symbol.iterator;
const o23 = {
    [v10]() {
        let v12 = 10;
        const o22 = {
            next() {
                const v14 = v12--;
                const v16 = v12 == 0;
                const o21 = {
                    "done": v16,
                    __proto__: this,
                    "maxByteLength": 473,
                    "maxByteLength": 0,
                    "a": v14,
                    "b": 9,
                    "e": undefined,
                    "c": "4096",
                    "maxByteLength": 0,
                    "b": v12,
                    "maxByteLength": 12,
                    "maxByteLength": 473,
                    n(a18, a19, a20) {
                        return v14;
                    },
                };
                return o21;
            },
        };
        return o22;
    },
};
for (let i27 = 0, i28 = 10 + 10; i28--, i27 < i28;) {
    let v35 = v8.getFloat64();
    for (let v36 of "4096") {
        [v36,v36,...v35] = o23;
    }
}
for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
}
for (let i50 = 0, i51 = 10; i50 < i51;) {
    i51--;
}
for (let i60 = 0, i61 = 10; i61--, i60 < i61;) {
    createGlobalObject().Atomics;
}
gc();
