const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
        const v15 = new BigInt64Array();
        function f16() {
            try {
            } catch(e17) {
            } finally {
            }
            return v15;
        }
        v15.valueOf = f16;
        a2.substring(v15);
        return f1;
    }
    f1(v0);
`;
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
    for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
    }
}
eval(v0).next();
gc();
