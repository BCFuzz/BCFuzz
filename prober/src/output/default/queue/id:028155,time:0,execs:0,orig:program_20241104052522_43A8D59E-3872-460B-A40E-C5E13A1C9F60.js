const v0 = `
    async function* f1(a2, a3) {
        const v6 = new Uint32Array(1000);
        for (const v7 in v6) {
            /\ud808\udf45*[\cA]/mis.test(undefined);
        }
        return Uint32Array;
    }
    f1(f1, f1);
`;
eval(v0).next();
gc();
