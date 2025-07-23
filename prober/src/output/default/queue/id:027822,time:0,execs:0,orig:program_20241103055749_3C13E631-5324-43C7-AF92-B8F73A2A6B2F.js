function f0() {
    const v6 = !(255 && 255) | f0;
    const v8 = [2147483648 * Math,v6,f0];
    const o10 = {
        ..."unshift",
        __proto__: v8,
    };
    return o10;
}
const o20 = {
    n(a13, a14, a15) {
        const v16 = this;
        const t12 = v16.Intl.RelativeTimeFormat;
        const v19 = new t12();
        v19.toString = f0;
        return v19;
    },
};
const t18 = o20.n;
const v22 = t18();
const v23 = v22.toString(v22, f0, o20, f0);
try { v22.format(133101.47695346922, v23); } catch (e) {}
gc();
