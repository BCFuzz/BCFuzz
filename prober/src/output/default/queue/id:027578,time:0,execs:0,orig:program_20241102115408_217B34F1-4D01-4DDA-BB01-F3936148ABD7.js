const v1 = `
    async function* f2(a3, a4) {
        for (let i7 = 0, i8 = 10;
            (() => {
                for (let i11 = 10, i12 = 10; -13369 < i12; i12--) {
                }
                return i7 < i8;
            })();
            i8--) {
        }
        typeof "f" == "string";
        return f2;
    }
    f2();
`;
eval(v1).next(v1);
gc();
