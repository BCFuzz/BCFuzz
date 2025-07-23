for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = /(?:a+)*[EBKw(?:ab)\x60]/mdyu;
        const v6 = [i2,i2,i2];
        const v8 = Reflect.apply(v4.exec, v4, v6);
        function f10() {
            return "push";
        }
        const o25 = {
            n(a13, a14, a15) {
                function f16() {
                    return "push";
                }
                function f17(a18) {
                    return this;
                }
                Object.defineProperty(a15, "script", { enumerable: true, get: f16, set: f17 });
                const v19 = this;
                const t16 = v19.Intl.Locale;
                const v22 = new t16("aWqBm", f10);
                const v23 = v22.minimize();
                v23.script;
                return v23;
            },
        };
        const t23 = o25.n;
        t23(v8, Reflect, f10);
        return i2 < i3;
    })();
    i3--) {
}
gc();
