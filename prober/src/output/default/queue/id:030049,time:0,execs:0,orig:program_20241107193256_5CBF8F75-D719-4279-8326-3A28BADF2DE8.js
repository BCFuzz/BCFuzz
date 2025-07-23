const v1 = `
    async function* f2(a3, a4) {
        const v6 = new BigInt64Array();
        for (let i9 = 10, i10 = 10; -13369 !== i10; i10--) {
        }
        for (let [i29, i30] = (() => {
                for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
                }
                return [0, 10];
            })();
            i30--, i29 < i30;
            ) {
        }
        for (const v37 of v6) {
            const v39 = ([1073741823,10000,-1660011075,257,-4294967296,2,10,329015113,-12,-2147483648]).shift();
            yield* undefined;
            return v39;
        }
        return a3;
        return f2;
    }
    f2(undefined, f2);
`;
for (let i43 = 0, i44 = 10; i43 < i44; i44--) {
    for (let i53 = 0, i54 = 10; i53 < i54; i54--) {
    }
}
eval(v1).next();
gc();
