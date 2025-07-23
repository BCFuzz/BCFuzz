const v0 = [];
const v1 = `
    async function* f2(a3, a4) {
        for (let i7 = 0, i8 = 10;
            (() => {
                for (let v9 = 0; v9 < 5; v9++) {
                    v0.d = v9;
                    for (let i12 = 0, i13 = 10000; i12 < i13; i13--) {
                    }
                    delete v0.d;
                }
                return i7 < i8;
            })();
            i8--) {
        }
        return v0;
    }
    f2(v1, f2);
`;
for (let i30 = 0, i31 = 10;
    i30 < i31;
    (() => {
        --i31;
        for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
        }
    })()) {
    for (let i50 = 0, i51 = 10; i50 < i51; i51--) {
    }
}
eval(v1).next(v1, eval);
gc();
