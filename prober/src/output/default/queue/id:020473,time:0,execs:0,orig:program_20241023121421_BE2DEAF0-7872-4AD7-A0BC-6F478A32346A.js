for (let v0 = 0; v0 < 32; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        function f3(a4) {
            return f3;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f3 });
    }
    new F1();
    new F1();
    new F1();
    new F1();
}
gc();
