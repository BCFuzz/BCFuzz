for (let v2 = 0; v2 < 32; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        function f5(a6) {
            const v7 = new Float64Array(58766);
            return v7;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f5 });
        this.h = F3;
        this.c = -256;
    }
    const v9 = new F3();
    const v10 = v9.h;
    const v13 = new Int16Array(3254);
    const v16 = new Uint8ClampedArray(16);
    try { v13.toLocaleString(v16); } catch (e) {}
    new v10();
    new F3();
}
gc();
