for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    async function* f11(a12, a13) {
        for (let i16 = 0, i17 = 10; i17; i17--) {
            const v26 = new ArrayBuffer(9);
            const v28 = new DataView(v26);
            const v30 = Symbol.iterator;
            const o39 = {
                [v30]() {
                    let v32 = 10;
                    const o38 = {
                        next() {
                            v32--;
                            const v36 = v32 == 0;
                            const o37 = {
                                "done": v36,
                                __proto__: this,
                            };
                            return o37;
                        },
                    };
                    o38.value = this;
                    return o38;
                },
            };
            for (let i43 = 0, i44 = 10 + 10; i44--, i43 < i44;) {
                let v51 = v28.getFloat64(a12);
                for (let v52 of "4096") {
                    [v52,v52,...v51] = o39;
                }
            }
        }
        return f11;
    }
    f11(f11, v10);
`;
for (let i56 = 0, i57 = 10; i56 < i57; i57--) {
    for (let i66 = -3, i67 = 10; i66 < i67; i67--) {
    }
}
eval(v10).next();
for (let [i89, i90] = (() => {
        for (let i79 = 1, i80 = 10; i79 < i80; i80--) {
        }
        return [0, 10];
    })();
    i89 < i90;
    i90--) {
}
for (let i99 = -3, i100 = 10; i99 < i100; i100--) {
}
for (let [i119, i120] = (() => {
        for (let i111 = 0, i112 = 10; i111 < i112; i112--) {
        }
        return [-3, 10];
    })();
    i119 < i120;
    i120--) {
}
gc();
