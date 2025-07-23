const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10;
            (() => {
                for (let i10 = 10, i11 = 10; -13369 < i11; i11--) {
                }
                return i6 < i7;
            })();
            (() => {
                i7--;
                for (let i24 = 0, i25 = 10;
                    i25;
                    (() => {
                        i25--;
                        const o30 = {
                            ...Symbol,
                        };
                        function f31(a32, a33) {
                            return Symbol;
                        }
                        class C34 extends f31 {
                            #f;
                        }
                        new C34();
                        for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
                        }
                    })()) {
                }
            })()) {
            for (let i52 = 0, i53 = 10; i52 < i53; i53--) {
                for (let i62 = 0, i63 = 10; i62 < i63; i63--) {
                }
            }
        }
        return f1;
    }
    f1(f1, f1);
`;
for (let i73 = 0, i74 = 10; i73 < i74; i74--) {
}
const v82 = eval(v0);
v82.next(v82, eval);
gc();
