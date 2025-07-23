function f1(a2, a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        a2["p" + v4] = v4;
    }
    return a2;
}
Float32Array.toString = f1;
const o16 = {
    n(a9, a10, a11) {
        const v12 = this;
        const v14 = v12.Intl.Locale;
        v14.collation = Float32Array;
        try { new v14("split", v14); } catch (e) {}
        return a10;
    },
};
const v17 = o16.n;
v17("split", v17, Float32Array, o16);
gc();
