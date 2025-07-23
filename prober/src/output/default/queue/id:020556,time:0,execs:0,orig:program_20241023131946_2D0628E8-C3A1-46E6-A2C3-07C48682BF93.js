function f0(a1, a2, a3, a4) {
    return a3;
}
const v5 = `
    async function* f6(a7, a8) {
        const v10 = [BigInt64Array,BigInt64Array,BigInt64Array,BigInt64Array];
        for (let i = 0; i < 5; i++) {
            const v11 = new BigInt64Array();
            for (const v12 of v11) {
                function F13() {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v15 = F13();
                const v16 = [a7,a7,a7];
                v15 === v16 ? v15 : v16;
            }
            const v19 = v10.pop();
            const v20 = v19?.__defineSetter__;
            try { v20(a7, f0, v10, v19); } catch (e) {}
        }
        try { a7.substring(a7); } catch (e) {}
        const v23 = [14,-3,-2,3,1024,4294967295,9223372036854775807];
        for (let v24 = 0; v24 < 5; v24++) {
        }
        for (const v25 of v23) {
        }
        const v28 = new Uint16Array();
        if (null != v28) {
        }
        try { a8.at(); } catch (e) {}
        return f0;
    }
    f6(f0, f6);
`;
for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
    for (let i44 = 0, i45 = 10; i44 < i45; i45--) {
    }
}
eval(v5).next();
gc();
