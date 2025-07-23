for (let v2 = 0; v2 < 32; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        function f5(a6) {
            const v7 = new Float64Array(58766);
            v7[3485];
            return v7;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f5 });
        this.h = F3;
        this.c = -256;
    }
    const v10 = new F3();
    const t13 = v10.h;
    new t13(58766);
    const v13 = new F3();
    const t16 = v13.constructor;
    new t16();
    const t18 = v13.h;
    new t18();
}
gc();
