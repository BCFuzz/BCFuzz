function f2(a3, a4) {
    return a3;
}
Int32Array[Symbol.toPrimitive] = f2;
const v8 = ["boolean",Int32Array,Int16Array];
const o17 = {
    n(a10, a11, a12) {
        const v13 = this;
        const v15 = v13.Intl.DisplayNames;
        try { new v15(v8); } catch (e) {}
        return a11;
    },
};
const t13 = o17.n;
t13();
gc();
