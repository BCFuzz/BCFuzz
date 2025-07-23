const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
        }
        for (let [i26, i27] = (() => {
                for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
                }
                return [0, 10];
            })();
            i26 < i27;
            i27--) {
        }
        const v37 = new ArrayBuffer(9);
        const v39 = new DataView(v37);
        const v41 = Symbol.iterator;
        const o50 = {
            [v41]() {
                let v43 = 10;
                const o49 = {
                    next() {
                        v43--;
                        const v47 = v43 == 0;
                        const o48 = {
                            "done": v47,
                            __proto__: this,
                        };
                        return o48;
                    },
                };
                return o49;
            },
        };
        for (let i54 = 0, i55 = 10 + 10; i55--, i54 < i55;) {
            let v62 = v39.getFloat64();
            for (let v63 = 0; v63 < 100; v63++) {
            }
            for (let v64 of "4096") {
                [v64,v64,...v62] = o50;
            }
        }
        return v41;
    }
    f1(f1, f1);
`;
const v67 = eval(v0);
v67.next(v67, v67);
gc();
