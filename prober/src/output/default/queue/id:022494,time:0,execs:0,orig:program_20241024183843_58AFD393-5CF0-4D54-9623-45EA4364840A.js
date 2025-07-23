const v0 = /(?:a+)*[EBKw(?:ab)\x60]/mdyu;
const v2 = [Reflect,Reflect,Reflect,Reflect,Reflect];
const v3 = v0.exec;
const v4 = Reflect.apply(v3, v0, v2);
function f6() {
    return "push";
}
const o19 = {
    n(a9, a10, a11) {
        function f12() {
            return "push";
        }
        function f13(a14) {
            return v3;
        }
        Object.defineProperty(a11, "script", { enumerable: true, get: f12, set: f13 });
        const v15 = this;
        const t17 = v15.Intl.Locale;
        const v18 = new t17("md", f6);
        return v18;
    },
};
const t22 = o19.n;
t22(v4, Reflect, f6);
gc();
