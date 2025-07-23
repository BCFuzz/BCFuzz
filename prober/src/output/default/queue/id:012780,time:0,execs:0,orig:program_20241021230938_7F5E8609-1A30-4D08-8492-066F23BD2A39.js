for (let v3 = 0; v3 < 25; v3++) {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        function f6(a7) {
            new Float64Array(58766);
            return a7;
        }
        Object.defineProperty(Float32Array, "c", { configurable: true, set: f6 });
        this.h = F4;
        f6();
    }
    const v10 = new F4();
    const t12 = v10.h;
    new t12(v3, v10);
    new F4();
}
gc();
