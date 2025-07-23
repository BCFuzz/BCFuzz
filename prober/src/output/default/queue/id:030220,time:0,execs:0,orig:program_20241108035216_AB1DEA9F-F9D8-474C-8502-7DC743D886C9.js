for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v10 = `
    async function* f11(a12, a13) {
        for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
            class C24 {
                static o(a26) {
                    for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
                        try {
                            function f38() {
                                let v39 = f38--;
                                const v40 = v39--;
                                ("").split(a12, i30).flatMap(eval);
                                return v40;
                            }
                            const v45 = [536870912n,f38];
                            const v48 = eval(v45.toLocaleString(f38, v45));
                            v48(C24, v48);
                        } catch(e50) {
                        }
                        for (let i53 = 0, i54 = 10; i53 < i54; i54--) {
                        }
                    }
                }
            }
            C24.o();
        }
        return a12;
    }
    f11(f11, f11);
`;
for (let i65 = 0, i66 = 10; i65 < i66; i66--) {
    for (let i75 = 0, i76 = 10; i75 < i76; i76--) {
    }
}
eval(v10).next(eval, eval, v10);
gc();
