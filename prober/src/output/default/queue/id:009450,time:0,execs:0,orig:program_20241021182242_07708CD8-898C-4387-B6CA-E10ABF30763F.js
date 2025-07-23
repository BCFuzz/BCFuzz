for (let v2 = 0; v2 < 25; v2++) {
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
    new F5();
}
gc();
