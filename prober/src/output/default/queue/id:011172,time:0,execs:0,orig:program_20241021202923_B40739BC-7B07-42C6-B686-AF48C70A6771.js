for (let v1 = 0; v1 < 32; v1++) {
    createGlobalObject();
    createGlobalObject();
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        function f7(a8) {
            new Float64Array(58766);
        }
        Object.defineProperty(this, "c", { configurable: true, set: f7 });
        this.c = -256;
    }
    new F5();
    new F5();
}
gc();
