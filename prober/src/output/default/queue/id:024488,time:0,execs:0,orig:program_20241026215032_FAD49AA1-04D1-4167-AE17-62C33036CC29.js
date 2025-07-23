function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends F0 {
}
const v4 = new C3();
const v5 = `
    async function* f6(a7, a8) {
        for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
            class C19 {
                static o(a21) {
                    for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
                        super[v4];
                        super[a21];
                    }
                }
            }
            C19.o();
        }
        return a8;
    }
    f6(f6, F0);
`;
for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
    for (let i48 = 0, i49 = 10; i48 < i49; i49--) {
    }
}
eval(v5).next();
gc();
