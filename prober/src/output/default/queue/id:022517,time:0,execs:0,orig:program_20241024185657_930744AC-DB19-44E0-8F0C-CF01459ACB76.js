function f0() {
    return f0;
}
const o8 = {
    n(a2, a3, a4) {
        const v5 = this;
        return v5.Intl.Locale;
    },
};
const v9 = o8.n;
const v10 = v9();
const o11 = {
};
o11.get = f0;
const v13 = new Proxy(v10, o11);
try { new v13(v9); } catch (e) {}
gc();
