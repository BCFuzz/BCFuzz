const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10;
            (() => {
                for (let i10 = 10, i11 = 10; -13369 < i11; i11--) {
                }
                return i6 < i7;
            })();
            i7--) {
            for (let [i29, i30] = (() => {
                    const v27 = new Int8Array(i7);
                    v27.subarray(i7, i7);
                    return [0, 10];
                })();
                i29 < i30;
                i30--) {
                for (let [i42, i43] = (() => {
                        Object.defineProperty(Int16Array.__proto__, "e", { configurable: true, enumerable: true, set: ArrayBuffer });
                        return [0, 10];
                    })();
                    i42 < i43;
                    i43--) {
                }
            }
        }
        return a3;
    }
    f1(v0, f1);
`;
for (let i53 = 0, i54 = 10; i53 < i54; i54--) {
}
eval(v0).next();
gc();
