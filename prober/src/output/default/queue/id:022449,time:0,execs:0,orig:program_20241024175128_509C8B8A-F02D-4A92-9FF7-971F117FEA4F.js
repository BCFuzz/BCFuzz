const v0 = [];
const v1 = `
    async function* f2(a3, a4) {
        for (let i7 = 0, i8 = 10;
            (() => {
                v0[0] = a4;
                for (let v9 = 0; v9 < 5; v9++) {
                    v0.d = v9;
                    delete v0.d;
                }
                return i7 < i8;
            })();
            (() => {
                i8--;
                try { v0.flatMap(); } catch (e) {}
            })()) {
        }
        return v1;
    }
    f2(f2, v0);
`;
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
    for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
    }
}
eval(v1).next();
gc();
