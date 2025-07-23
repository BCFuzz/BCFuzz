for (let v3 = 0; v3 < 25; v3++) {
    createGlobalObject();
    function F6() {
        if (!new.target) { throw 'must be called with new'; }
        function f8(a9) {
            new Float64Array(58766);
            return v3;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f8 });
        this.c = -256;
    }
    new F6();
    new F6();
    new F6();
}
gc();
