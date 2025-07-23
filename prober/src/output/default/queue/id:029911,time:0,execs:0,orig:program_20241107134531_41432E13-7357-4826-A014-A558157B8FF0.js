const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
            class C14 {
                static o(a16) {
                    for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
                        try {
                            const v28 = Uint16Array(this, i20);
                            let v30 = 2546 >>> 2546;
                            this(v28, v30++);
                        } catch(e33) {
                        }
                    }
                }
            }
            C14.o();
        }
        return v0;
    }
    f1(f1, f1);
`;
for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
    for (let i48 = 0, i49 = 10; i48 < i49; i49--) {
    }
}
const v57 = eval(v0);
v57.next(v0, v0, v0, v57, v57);
gc();
