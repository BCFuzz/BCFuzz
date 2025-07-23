for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
for (let i14 = 0, i15 = 10; i15--, i14 < i15;) {
}
for (let [i34, i35] = (() => {
        for (let i26 = 0, i27 = 10; 0 < i27; i27--) {
        }
        return [0, 10];
    })();
    (() => {
        for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
        }
        return i34 < i35;
    })();
    i35--) {
}
const v55 = new ArrayBuffer(9);
const v57 = new DataView(v55);
const v59 = Symbol.iterator;
const o68 = {
    [v59]() {
        let v61 = 10;
        const o67 = {
            next() {
                v61--;
                const v65 = v61 == 0;
                const o66 = {
                    "done": v65,
                    __proto__: this,
                    "maxByteLength": 473,
                    "f": 1.0,
                    "e": Symbol,
                    "h": v61,
                    "maxByteLength": 0,
                    "maxByteLength": 0,
                    "b": v61,
                    "maxByteLength": 473,
                };
                return o66;
            },
        };
        return o67;
    },
};
for (let i72 = 0, i73 = 10 + 10; i73--, i72 < i73;) {
    let v80 = v57.getFloat64(i72);
    for (let v81 of "4096") {
        [v81,v81,...v80] = o68;
    }
}
gc();
