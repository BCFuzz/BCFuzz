const v2 = `
    async function* f3(a4, a5) {
        for (let i8 = 0, i9 = 10; i8 === i9;) {
            for (let i = 0; i < 5; i++) {
                await 16;
                for (let v16 = 0; v16 < 5; v16++) {
                    undefined["p" + v16] = v16;
                }
            }
        }
        return f3;
    }
    f3();
`;
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
    for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
    }
}
eval(v2).next();
gc();
