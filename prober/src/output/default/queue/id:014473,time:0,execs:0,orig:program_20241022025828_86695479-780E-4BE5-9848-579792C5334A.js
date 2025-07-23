for (let v2 = 0; v2 < 32; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        function f5(a6) {
            new Float64Array(58766);
        }
        Object.defineProperty(this, "c", { configurable: true, set: f5 });
        this.h = F3;
        this.c = -256;
    }
    new F3();
    const v10 = new F3();
    const v11 = v10.h;
    const v13 = new ArrayBuffer();
    new DataView(v13);
    new v11(Float64Array);
    new F3();
}
gc();
