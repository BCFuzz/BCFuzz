const v1 = `
    async function* f2(a3, a4) {
        class C5 {
            #g;
            constructor(a7, a8, a9, a10) {
                try {
                    (1).#g;
                } catch(e12) {
                }
                for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
                }
            }
        }
        const v23 = new C5();
        return v23;
    }
    f2();
`;
eval(v1).next();
gc();
