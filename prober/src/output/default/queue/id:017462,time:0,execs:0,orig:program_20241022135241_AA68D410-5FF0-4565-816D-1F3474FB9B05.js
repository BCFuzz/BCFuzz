const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
        const v15 = new BigInt64Array();
        function f16() {
            const v17 = [62250,-1417039522,268435456,-13,-260,1201136488,15,-54487,-820541516,536870888];
            const v19 = (-9223372036854775807).__proto__;
            const o20 = {
            };
            o20.deleteProperty = v17;
            const v22 = new Proxy(v19, o20);
            return delete v22[7];
        }
        v15.valueOf = f16;
        try { a2.substring(v15); } catch (e) {}
        return f1;
    }
    f1(v0);
`;
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
    for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
    }
}
eval(v0).next();
gc();
