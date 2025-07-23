const v0 = `
    async function* f1(a2, a3) {
        a2.match(a2);
        for (let i7 = 0, i8 = 10;
            (() => {
                const v9 = i7 < i8;
                v9 || v9;
                const v11 = !v9;
                v11 || v11;
                return v9;
            })();
            i8--) {
        }
        return f1;
    }
    f1(v0);
`;
for (let i21 = 0, i22 = 10; i22--, i21 < i22;) {
    for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
    }
}
eval(v0).next(v0);
gc();
