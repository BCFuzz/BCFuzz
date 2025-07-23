for (let i2 = -3, i3 = 10; i3--, i2 < i3;) {
}
const v10 = `
    async function* f11(a12, a13) {
        const v16 = new Uint32Array(1000);
        for (const v17 in v16) {
            /[]*/mis.test(undefined);
        }
        return v16;
    }
    f11(f11, f11);
`;
eval(v10).next();
gc();
