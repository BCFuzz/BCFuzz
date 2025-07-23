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
                            #m(a36, a37, a38, a39) {
                            }
                        }
                        new C34();
                        for (let i43 = 0, i44 = 10; i43 < i44; i44--) {
                        }
                    })()) {
                }
            })()) {
            for (let i57 = 0, i58 = 10; i57 < i58; i58--) {
                for (let i67 = 0, i68 = 10; i67 < i68; i68--) {
                }
            }
        }
        return v0;
    }
    f1(f1, v0);
`;
for (let i78 = 0, i79 = 10; i78 < i79; i79--) {
}
eval(v0).next();
gc();
