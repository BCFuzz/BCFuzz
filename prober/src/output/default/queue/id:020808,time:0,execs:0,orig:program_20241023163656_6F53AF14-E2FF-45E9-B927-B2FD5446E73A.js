const v0 = /(?:a+)*[EBKw(?:ab)\x60]/mdyu;
const v2 = [v0,v0,v0,v0,v0];
const v3 = v0.exec;
const v4 = Reflect.apply(v3, v0, v2);
function f6() {
    return v0;
}
f6.numeric = v4;
function f7() {
    return "push";
}
function f8(a9) {
    return v3;
}
Object.defineProperty(f6, "firstDayOfWeek", { enumerable: true, get: f7, set: f8 });
const o20 = {
    n(a12, a13, a14) {
        const v15 = this;
        const v16 = v15.Intl;
        const t19 = v16.Locale;
        const v18 = new t19("aWqBm", f6);
        v18.minimize(v18, v16);
        return f6;
    },
};
const v21 = o20.n;
v21(v4, Reflect, f6, v4, v21);
gc();
