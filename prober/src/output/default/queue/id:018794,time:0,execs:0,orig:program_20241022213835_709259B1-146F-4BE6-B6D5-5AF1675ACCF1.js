for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    async function* f11(a12, a13) {
        for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
        }
        const v25 = [BigInt64Array];
        const v26 = new BigInt64Array();
        function f27(a28) {
            const o29 = {
                [BigInt64Array]: BigInt64Array,
            };
            return f11;
        }
        v26.toString = f27;
        const t15 = v25.pop();
        t15[Symbol.toPrimitive] = f27;
        try { a12.substring(v26); } catch (e) {}
        return v25;
    }
    f11(v10);
`;
for (let i37 = 0, i38 = 10; i37 < i38; i38--) {
}
eval(v10).next();
gc();
