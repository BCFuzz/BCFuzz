function f1() {
    return f1;
}
function f2() {
    return "push";
}
function f3(a4) {
    return f3;
}
Object.defineProperty(f1, "firstDayOfWeek", { enumerable: true, get: f2, set: f3 });
const o15 = {
    n(a7, a8, a9) {
        const v10 = this;
        const t13 = v10.Intl.Locale;
        const v13 = new t13("aWqBm", f1);
        v13.minimize();
        return f2;
    },
};
const v16 = o15.n;
v16("aWqBm", f2, v16, f3);
gc();
