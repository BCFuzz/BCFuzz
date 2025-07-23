for (let v2 = 0; v2 < 32; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        function f5(a6) {
            const v7 = new Float64Array(58766);
            v7[3485];
            return v2;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f5 });
        this.h = F3;
        this.c = -256;
    }
    const v10 = new F3();
    const v11 = v10.h;
    function F12() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v14 = new F12();
    v14.constructor;
    new v11();
    const v17 = new F3();
    const t21 = v17.constructor;
    new t21();
    const t23 = v17.h;
    new t23();
}
gc();
