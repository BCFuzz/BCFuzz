for (let i3 = 0, i4 = 10; i4--, i3 < i4;) {
}
for (let [i23, i24] = (() => {
        for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
        }
        return [0, 10];
    })();
    i23 < i24;
    i24--) {
}
const v34 = new ArrayBuffer(9);
const v36 = new DataView(v34);
const v38 = Symbol.iterator;
const o47 = {
    [v38]() {
        let v40 = 10;
        const o46 = {
            next() {
                v40--;
                const v44 = v40 == 0;
                const o45 = {
                    "done": v44,
                    __proto__: this,
                };
                return o45;
            },
        };
        Object.defineProperty(o46, "value", { value: BigUint64Array });
        return o46;
    },
};
for (let i51 = 0, i52 = 10 + 10; i52--, i51 < i52;) {
    let v59 = v36.getFloat64();
    for (let v60 = 0; v60 < 100; v60++) {
    }
    for (let v61 of "4096") {
        [v61,v61,...v59] = o47;
    }
}
gc();
