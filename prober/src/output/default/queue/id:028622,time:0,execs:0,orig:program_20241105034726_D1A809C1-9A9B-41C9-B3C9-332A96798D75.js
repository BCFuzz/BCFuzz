const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10;
            i6 < i7;
            (() => {
                function f11() {
                    return a3;
                }
                class C12 {
                }
                C12.eval = f11;
                with (C12) {
                    eval(a3);
                }
                i7--;
            })()) {
        }
        return f1;
    }
    f1(f1, v0);
`;
const v20 = eval(v0);
v20.next(v20, v20, v20, v20);
gc();
