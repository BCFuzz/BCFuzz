const v6 = new BigInt64Array(101);
new Uint8Array(3709);
async function f8(a9, a10, a11) {
    function f12(a13, a14) {
        for (let i17 = 0, i18 = 10;
            i17 < i18;
            (() => {
                i18--;
                const v24 = new WeakSet();
                const o25 = {
                };
                o25.b = v24;
            })()) {
            Reflect.construct(BigInt64Array, []);
        }
        for (let i35 = 0, i36 = 10; i35 !== i36; i36--) {
        }
        const v43 = `
            async function* f44(a45, a46) {
                function F47(a49, a50) {
                    if (!new.target) { throw 'must be called with new'; }
                    let v51 = 200;
                    const v52 = v51--;
                    for (let [i77, i78] = (() => {
                            for (let i59 = 0, i60 = 10; i59 < i60; i60--) {
                            }
                            const o68 = {
                            };
                            const v70 = new SharedArrayBuffer(3449, o68);
                            const v71 = new Int8Array(v70);
                            createGlobalObject().Atomics.sub(v71);
                            return [0, 10];
                        })();
                        i77 < i78;
                        i78--) {
                    }
                    const o86 = {
                        ...v6,
                        "maxByteLength": 3614,
                    };
                    const v88 = new SharedArrayBuffer(3614, o86);
                    const v90 = new Int32Array(v88);
                    createGlobalObject().Atomics.waitAsync(v90, v51, v90, v52);
                    for (let i97 = 0, i98 = 10; i97 < i98; i98--) {
                    }
                }
                new F47(a10, f44);
                for (let i108 = 0, i109 = 10; i108 != i109; i109--) {
                }
                return a46;
            }
            for (let i118 = 0, i119 = 10; i118 < i119; i119--) {
            }
            f44();
        `;
        for (let i129 = 0, i130 = 10;
            (() => {
                for (let i133 = 0, i134 = 10; i134; i134--) {
                }
                return i129 < i130;
            })();
            i130--) {
        }
        const v147 = eval(v43);
        v147.next(eval, a9, a10, v147);
        return v147;
    }
    a11.then = f12;
    return a11;
}
f8(f8, f8, f8);
for (let i152 = 0, i153 = 10; i152 < i153; i153--) {
}
gc();
