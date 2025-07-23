for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int8Array(256);
for (const v13 in v12) {
    function f15() {
        return v12;
    }
    function f16() {
        return "push";
    }
    function f17(a18) {
        return f17;
    }
    Object.defineProperty(f15, "firstDayOfWeek", { enumerable: true, get: f16, set: f17 });
    const o30 = {
        n(a21, a22, a23) {
            const v24 = this;
            const t17 = v24.Intl.Locale;
            const v27 = new t17("aWqBm", f15);
            v27.minimize().firstDayOfWeek;
            return v27;
        },
    };
    const t23 = o30.n;
    t23();
    for (let i35 = -3, i36 = 10; i35 < i36; i36--) {
    }
}
gc();
