const v0 = [2.0];
function f1(a2) {
    return 1000;
}
v0.toString = f1;
const o13 = {
    n(a5, a6, a7) {
        const v8 = this;
        const t8 = v8.Intl.NumberFormat;
        t8().format(v0);
        return f1;
    },
};
const t13 = o13.n;
t13();
gc();
