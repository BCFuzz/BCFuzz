for (let v2 = 0; v2 < 25; v2++) {
    class C4 extends Float32Array {
        #toString(a6, a7, a8) {
        }
    }
    new C4();
    function F10() {
        if (!new.target) { throw 'must be called with new'; }
        function f12(a13) {
            new Float64Array(58766);
            return 58766;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f12 });
        this.c = -256;
    }
    new F10();
    new F10();
    new F10();
}
gc();
