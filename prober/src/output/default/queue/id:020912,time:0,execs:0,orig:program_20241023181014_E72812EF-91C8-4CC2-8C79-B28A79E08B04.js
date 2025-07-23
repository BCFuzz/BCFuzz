const v1 = new BigInt64Array();
const v2 = v1.constructor;
for (let i = 0; i < 10; i++) {
    async function f3(a4, a5, a6) {
        let v7;
        try { v7 = a5(v2, v2); } catch (e) {}
        a5.constructor.apply(f3, f3);
        return v7;
    }
    f3(f3, f3);
}
gc();
