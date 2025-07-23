function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2() {
        return F0;
    }
    function f3(a4) {
        const o5 = {
        };
        function f6(a7, a8) {
            return o5;
        }
        o5.get = f6;
        const v10 = new Proxy(F0, o5);
        try { new v10(); } catch (e) {}
        return f6;
    }
    Object.defineProperty(this, "h", { configurable: true, get: f2, set: f3 });
    this.h = 129;
    for (let i14 = 0, i15 = 129; i14 < i15; i15--) {
    }
}
new F0();
gc();
