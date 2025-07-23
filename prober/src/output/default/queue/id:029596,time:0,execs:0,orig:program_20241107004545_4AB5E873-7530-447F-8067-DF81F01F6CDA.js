const v0 = /(?<!)/mdvgs;
const v4 = new ArrayBuffer(9);
const v6 = new DataView(v4);
const v8 = Symbol.iterator;
const o19 = {
    [v8]() {
        const v10 = this.__defineSetter__;
        try { new v10(v0); } catch (e) {}
        let v12 = 10;
        const o18 = {
            next() {
                v12--;
                const v16 = v12 == 0;
                const o17 = {
                    "done": v16,
                };
                return o17;
            },
        };
        return o18;
    },
};
for (let i23 = 0, i24 = 10 + 10; i24--, i23 < i24;) {
    let v31 = v6.getFloat64();
    for (let v32 = 0; v32 < 250; v32++) {
    }
    for (let v33 of "4096") {
        [v33,v33,...v31] = o19;
    }
}
gc();
