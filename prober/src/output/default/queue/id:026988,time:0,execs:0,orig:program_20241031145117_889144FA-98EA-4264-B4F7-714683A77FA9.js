const v1 = /(?:a+)*[EBKw(?:ab)\x60]/mdyu;
const v3 = [Reflect,Reflect,Reflect,Reflect];
const v4 = v1.exec;
const v5 = Reflect.apply(v4, v1, v3);
function f7() {
    return v4;
}
f7.collation = "push";
const o21 = {
    n(a10, a11, a12) {
        a12.region = 257;
        function f13() {
            return "push";
        }
        function f14(a15) {
            return Reflect;
        }
        Object.defineProperty(a12, "script", { enumerable: true, get: f13, set: f14 });
        const v16 = this;
        const t19 = v16.Intl.Locale;
        const v19 = new t19("aWqBm", f7);
        v19.maximize();
        return a11;
    },
};
const t25 = o21.n;
t25(v5, Reflect, f7);
gc();
