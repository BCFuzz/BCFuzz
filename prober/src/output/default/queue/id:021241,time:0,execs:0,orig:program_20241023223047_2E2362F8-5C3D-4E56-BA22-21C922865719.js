for (let v0 = 0; v0 < 100; v0++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        function f5(a6) {
            new Float64Array(58766);
            return a6;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f5 });
        this.c = -256;
    }
    new F3();
    class C10 {
    }
    const v11 = new C10();
    const o12 = {
    };
    o12.constructor.seal(v11);
}
gc();
