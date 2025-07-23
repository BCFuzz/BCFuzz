const v0 = /(?:a+)*[EBKw(?:ab)\x60]/mdyu;
const v2 = [v0,v0,v0,v0];
const v4 = Reflect.apply(v0.exec, v0, v2);
function f6() {
    return f6;
}
const o21 = {
    n(a9, a10, a11) {
        function f12() {
            return "push";
        }
        function f13(a14) {
            return a10;
        }
        Object.defineProperty(a11, "script", { enumerable: true, get: f12, set: f13 });
        const v15 = this;
        const t16 = v15.Intl.Locale;
        const v18 = new t16("aWqBm", f6);
        return v18.minimize().script;
    },
};
const t21 = o21.n;
t21(v4, Reflect, f6);
gc();
