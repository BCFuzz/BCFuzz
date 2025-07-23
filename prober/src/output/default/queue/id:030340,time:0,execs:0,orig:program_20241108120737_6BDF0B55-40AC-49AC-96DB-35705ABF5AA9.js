const v1 = `
    async function* f2(a3, a4) {
        for (let i = 0; i < 5; i++) {
            f2--;
        }
        const v7 = new BigInt64Array();
        for (let i10 = 10, i11 = 10; -13369 !== i11; i11--) {
        }
        for (let [i30, i31] = (() => {
                for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
                }
                return [0, 10];
            })();
            i31--, i30 < i31;
            ) {
        }
        for (const v38 of v7) {
            const v40 = ([1073741823,10000,-1660011075,257,-4294967296,2,10,329015113,-12,-2147483648]).shift();
            yield* undefined;
            return v40;
        }
        return a3;
    }
    f2(undefined);
`;
for (let i44 = 0, i45 = 10; i44 < i45; i45--) {
    for (let i54 = 0, i55 = 10; i54 < i55; i55--) {
    }
}
eval(v1).next();
gc();
