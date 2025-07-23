const v1 = `
    async function f2(a3, a4, a5) {
        for (let i7 = 0;
            i7 < 0;
            (() => {
                class C11 {
                }
                await (5 < i7);
                /\u{12345}/myvis;
            })()) {
        }
        return a5;
    }
`;
eval(v1);
gc();
