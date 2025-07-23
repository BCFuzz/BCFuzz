const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10;
            i6 < i7;
            (() => {
                i7--;
                const v13 = new Float32Array();
                for (let i16 = 0, i17 = 10; i16 !== i17; i17--) {
                    function f24(a25, a26) {
                        for (let i = 0; i < 25; i++) {
                            v13[0] &&= a26;
                        }
                        return v13;
                    }
                    f24();
                    f24();
                }
            })()) {
        }
        return f1;
    }
    f1();
`;
eval(v0).next();
gc();
