function f1() {
    return f1;
}
function f2() {
    return "push";
}
function f3(a4) {
    return a4;
}
Object.defineProperty(f1, "firstDayOfWeek", { enumerable: true, get: f2, set: f3 });
const o16 = {
    n(a7, a8, a9) {
        const v10 = this;
        const t13 = v10.Intl.Locale;
        const v13 = new t13("aWqBm", f1);
        v13.minimize().firstDayOfWeek;
        return v10;
    },
};
const t19 = o16.n;
t19();
gc();
