const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
        const v15 = new BigInt64Array(a3, a3, a3);
        function f16() {
            const v17 = [62250,-1417039522,268435456,-13,-260,1201136488,15,-54487,-820541516,536870888];
            const v19 = (-9223372036854775807).__proto__;
            const o20 = {
            };
            o20.deleteProperty = v17;
            const v22 = new Proxy(v19, o20);
            delete v22.c;
            return a2;
        }
        v15.valueOf = f16;
        try { a2.substring(v15); } catch (e) {}
        return v0;
    }
    f1(v0);
`;
for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
    for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
    }
}
eval(v0).next();
gc();
