const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 10, i7 = 10; -13369 < i7; i7--) {
        }
        for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
        }
        const v25 = new BigInt64Array();
        function f26() {
            function f28() {
                arguments.length **= 8;
                return 8;
            }
            f28();
            return v0;
        }
        v25.valueOf = f26;
        a2.substring(v25);
        return f1;
    }
    f1(v0);
`;
for (let i35 = 0, i36 = 10; i35 < i36; i36--) {
    for (let i45 = 0, i46 = 10; i45 < i46; i46--) {
    }
}
eval(v0).next(eval, v0, eval, eval);
gc();
