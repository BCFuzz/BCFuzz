const v4 = new ArrayBuffer(9);
const v6 = new DataView(v4);
const v7 = Symbol.iterator;
const o16 = {
    [v7]() {
        let v9 = 10;
        const o15 = {
            next() {
                v9--;
                const v13 = v9 == 0;
                const o14 = {
                    "done": v13,
                };
                o14.value = this;
                o14.value = o14;
                return o14;
            },
        };
        return o15;
    },
};
for (let i20 = 0, i21 = 10 + 10; i21--, i20 < i21;) {
    let v28 = v6.getFloat64();
    for (let v29 = 0; v29 < 250; v29++) {
    }
    for (let v30 of "4096") {
        [v30,v30,...v28] = o16;
    }
}
gc();
