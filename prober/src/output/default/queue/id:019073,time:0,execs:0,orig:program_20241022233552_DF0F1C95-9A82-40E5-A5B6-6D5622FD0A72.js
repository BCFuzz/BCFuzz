const v0 = `
    async function* f1(a2, a3) {
        const v4 = a2.match(a2);
        for (let i6 = 10, i7 = 10;
            (() => {
                const v8 = i6 < i7;
                const v10 = !(v8 || v8);
                v10 || v10;
                return v8;
            })();
            ) {
        }
        return v4;
    }
    f1(v0);
`;
eval(v0).next();
gc();
