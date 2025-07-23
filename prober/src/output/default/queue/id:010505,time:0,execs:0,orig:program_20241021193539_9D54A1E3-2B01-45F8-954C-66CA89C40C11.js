const v0 = `
    let v1 = 0;
    while ((() => {
            const o6 = {
                ["symbol"](a4) {
                    let {...v5} = "symbol";
                },
            };
            const v8 = v1 < 5;
            class C9 {
                constructor(a11, a12, a13, a14) {
                }
            }
            return v8;
        })()) {
        v1++;
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();
