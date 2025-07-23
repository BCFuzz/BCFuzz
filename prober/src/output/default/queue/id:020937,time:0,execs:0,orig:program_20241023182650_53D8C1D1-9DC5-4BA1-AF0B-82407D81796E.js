const v0 = /[\c~]/mds;
const v1 = `
    async function* f2(a3, a4) {
        for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
        }
        const v16 = new BigInt64Array(a3, a4, a4);
        function f17() {
            try {
            } catch(e18) {
            } finally {
                const v19 = v0.compile();
                v19.flags = v19;
            }
            return v16;
        }
        v16.valueOf = f17;
        a3.substring(v16);
        return BigInt64Array;
    }
    f2(v1);
`;
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
    for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
    }
}
eval(v1).next();
gc();
