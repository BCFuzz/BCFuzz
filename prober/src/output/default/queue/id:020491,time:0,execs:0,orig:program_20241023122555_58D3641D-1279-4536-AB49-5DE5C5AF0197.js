const v0 = `
    async function* f1(a2, a3) {
        for (let [i7, i8] = (() => {
                let v5 = 10;
                v5--;
                return [0, v5];
            })();
            i7 <= i8;
            i8--) {
        }
        const v17 = ([BigInt64Array]).pop();
        try { v17.call(); } catch (e) {}
        try { v17.toString(); } catch (e) {}
        const v20 = v17.__defineSetter__;
        try { v20(v20); } catch (e) {}
        try { v20(v20); } catch (e) {}
        try { a2.substring(v0, v20, f1, f1); } catch (e) {}
        for (const v25 of [14,-3,-2,3,1024,4294967295,9223372036854775807]) {
        }
        try { a3.at(); } catch (e) {}
    }
    f1();
`;
for (let i30 = 0, i31 = 10; i30 < i31; i31--) {
    for (let i40 = 0, i41 = 10; i41--, i40 < i41;) {
    }
}
eval(v0).next();
gc();
