const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
        const v15 = JSON.stringify(v0);
        for (let [i20, i21] = (() => {
                eval(v15);
                return [0, 10];
            })();
            i21--, i20 < i21;
            ) {
        }
        const v28 = [14,-3,-2,3,1024,4294967295,9223372036854775807];
        for (let i = 0; i < 5; i++) {
            for (const v29 of v28) {
            }
        }
    }
    f1();
`;
for (let i33 = 0, i34 = 10; i33 < i34; i34--) {
    for (let i43 = 0, i44 = 10; i43 < i44; i44--) {
    }
}
eval(v0).next();
gc();
