const v1 = new BigUint64Array();
function f2(a3, a4) {
    const o5 = {
        __proto__: a4,
    };
    return o5;
}
const v7 = f2(f2(BigUint64Array, v1), v1);
const o17 = {
    n(a9, a10, a11) {
        const v12 = this;
        const t11 = v12.Intl.Segmenter;
        const v15 = new t11(a9);
        v15.resolvedOptions();
        return v7;
    },
};
const v18 = o17.n;
try { v18(v7); } catch (e) {}
v18();
gc();
