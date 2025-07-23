const v1 = new BigUint64Array();
const v6 = new ArrayBuffer(9);
const v8 = new DataView(v6);
const v9 = Symbol.iterator;
let o18 = {
    [v9]() {
        let v11 = 10;
        const o17 = {
            next() {
                v11--;
                const v15 = v11 == 0;
                const o16 = {
                    "done": v15,
                };
                return o16;
            },
        };
        return o17;
    },
};
for (let i22 = 0, i23 = 10 + 10; i23--, i22 < i23;) {
    let v30 = v8.getFloat64();
    for (let v31 = 0; v31 < 10; v31++) {
    }
    for (let v32 of "4096") {
        [v32,v32,...v30] = o18;
    }
    o18 = v1;
}
gc();
