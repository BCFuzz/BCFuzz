for (let v2 = 0; v2 < 25; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        function f5(a6) {
            const v7 = new Float64Array(58766);
            return v7;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f5 });
        this.h = F3;
        class C9 {
            constructor() {
                super.d = this;
            }
        }
        const v11 = new C9();
        for (const v12 in v11) {
        }
        this.c = -256;
    }
    const v13 = new F3();
    const v14 = v13.h;
    const v15 = new v14(v14, Float64Array, v14, v13);
    const t22 = v15.h;
    new t22();
}
gc();
