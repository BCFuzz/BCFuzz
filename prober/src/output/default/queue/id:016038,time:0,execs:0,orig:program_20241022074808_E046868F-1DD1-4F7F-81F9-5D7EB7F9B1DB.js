const v0 = `
    async function* f1(a2, a3) {
        for (let v4 = 0; v4 < 5; v4++) {
        }
        for (let v5 = 0; v5 < 5; v5++) {
        }
        const v7 = [v0,v0,v0,v0,v0];
        for (let i = 0; i < 5; i++) {
            const v8 = new BigInt64Array();
            for (const v9 of v8) {
            }
            const v10 = v7.pop();
            for (let v11 = 0; v11 < 5; v11++) {
            }
            v10?.__defineSetter__;
        }
        try { a3.at(); } catch (e) {}
        return v7;
    }
    f1(f1, v0);
`;
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
    for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
    }
}
const v36 = eval(v0);
v36.next(v36, v0, v36, v36, eval);
gc();
