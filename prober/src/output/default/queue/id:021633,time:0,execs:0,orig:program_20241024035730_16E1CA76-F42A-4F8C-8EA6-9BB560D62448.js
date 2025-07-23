const v0 = /(?:a+)*[EBKw(?:ab)\x60]/mdyu;
const v2 = [v0,v0,v0,v0];
const v3 = v0.exec;
const v4 = Reflect.apply(v3, v0, v2);
function f6() {
    return f6;
}
f6.numeric = v4;
function f7() {
    return "push";
}
function f8(a9) {
    return a9;
}
Object.defineProperty(f6, "firstDayOfWeek", { enumerable: true, get: f7, set: f8 });
const o23 = {
    n(a12, a13, a14) {
        function f15() {
            return "push";
        }
        function f16(a17) {
            return a17;
        }
        Object.defineProperty(a14, "script", { enumerable: true, get: f15, set: f16 });
        const v18 = this;
        const t25 = v18.Intl.Locale;
        const v21 = new t25("aWqBm", f6);
        v21.minimize(Reflect);
        return v3;
    },
};
const t31 = o23.n;
t31(v4, Reflect, f6);
gc();
