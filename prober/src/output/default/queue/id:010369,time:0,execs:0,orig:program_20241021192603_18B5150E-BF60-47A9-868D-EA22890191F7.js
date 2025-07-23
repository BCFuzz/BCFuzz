for (let v0 = 0; v0 < 10; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        function f3(a4) {
            /(x)(x)(x)\3*foo(?!bar)bazZrC?/mv.test("function");
            return v0;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f3 });
        this.c = -256;
    }
    new F1();
}
gc();
