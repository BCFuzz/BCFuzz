const v1 = new Uint8ClampedArray(Uint8ClampedArray, Uint8ClampedArray, Uint8ClampedArray);
const v2 = [];
Object.defineProperty(v2, 0, { enumerable: true, value: v1 });
const v3 = `
    async function* f4(a5, a6) {
        for (let i9 = 0, i10 = 10;
            (() => {
                for (let v11 = 0; v11 < 5; v11++) {
                    v2.d = v11;
                    for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
                    }
                    delete v2.d;
                }
                return i9 < i10;
            })();
            (() => {
                i10--;
                try { v2.flatMap(f4); } catch (e) {}
            })()) {
        }
        return f4;
    }
    f4();
`;
for (let i33 = 0, i34 = 10;
    i33 < i34;
    (() => {
        i34--;
        for (let i41 = 0, i42 = 10; i41 < i42; i42--) {
        }
    })()) {
    for (let i53 = 0, i54 = 10; i53 < i54; i54--) {
    }
}
eval(v3).next();
gc();
