function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2() {
        return this;
    }
    function f3(a4) {
        const o5 = {
        };
        function f6(a7, a8) {
            return o5;
        }
        o5.get = f6;
        const v10 = new Proxy(F0, o5);
        try { new v10(this, o5, f6); } catch (e) {}
        return a4;
    }
    Object.defineProperty(this, "h", { configurable: true, get: f2, set: f3 });
    this.h = 129;
    for (let [i16, i17] = (() => {
            const o13 = {
            };
            return [0, 10];
        })();
        i16 < i17;
        i17--) {
    }
}
new F0();
gc();
