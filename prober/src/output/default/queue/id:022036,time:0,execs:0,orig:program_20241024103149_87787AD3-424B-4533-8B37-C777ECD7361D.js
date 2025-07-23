const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
            for (let i16 = 10, i17 = 10; -13369 !== i17; i17--) {
            }
        }
        for (const v25 in 9) {
            for (let v26 = 0; v26 < 5; v26++) {
                const t8 = 9;
                t8[v25] = v26;
                v26 === v26;
            }
        }
        return f1;
    }
    f1();
`;
for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
    for (let i41 = 0, i42 = 10; i41 < i42; i42--) {
    }
}
eval(v0).next();
gc();
