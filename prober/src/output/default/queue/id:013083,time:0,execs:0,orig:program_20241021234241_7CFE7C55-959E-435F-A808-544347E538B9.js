const v1 = `
    async function* f2(a3, a4) {
        return Float32Array;
    }
    f2(f2, f2);
`;
eval(v1).next();
gc();
