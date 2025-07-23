function f1(a2, a3, a4, a5) {
    return a4;
}
const v6 = `
    async function* f7(a8, a9) {
        const v11 = [BigInt64Array];
        for (let i = 0; i < 5; i++) {
            const v12 = new BigInt64Array(2);
            for (const v13 of v12) {
            }
            const v15 = v11.pop()?.__defineSetter__;
            try { v15(); } catch (e) {}
        }
        v11[f7] /= 2;
        try { a8.substring(f7); } catch (e) {}
        for (const v19 of [14,-3,-2,3,1024,4294967295,9223372036854775807]) {
        }
        const v21 = new Uint16Array();
        let v22;
        try { v22 = v21.toReversed(); } catch (e) {}
        try { a9.at(v22, f7, a9); } catch (e) {}
        return f1;
    }
    f7();
`;
for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
    for (let i37 = 0, i38 = 10; i37 < i38; i38--) {
    }
}
eval(v6).next();
gc();
