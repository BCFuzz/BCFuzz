const v1 = new WeakMap();
for (let v4 = 0; v4 < 25; v4++) {
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        function f7(a8) {
            const v9 = new Float64Array(58766);
            return v9;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f7 });
        this.h = F5;
        v1.g = v4;
        this.c = -256;
    }
    const v11 = new F5();
    const t14 = v11.h;
    new t14();
    new F5();
}
for (let i17 = -3, i18 = 10; i17 < i18; i18--) {
}
gc();
