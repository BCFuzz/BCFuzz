for (let v0 = 0; v0 < 32; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        function f3(a4, a5) {
            return f3;
        }
        f3();
        function f7(a8) {
        }
        Object.defineProperty(this, "c", { configurable: true, set: f7 });
        this.h = F1;
    }
    const v9 = new F1();
    const t13 = v9.h;
    new t13();
    new F1();
    new F1();
}
gc();
