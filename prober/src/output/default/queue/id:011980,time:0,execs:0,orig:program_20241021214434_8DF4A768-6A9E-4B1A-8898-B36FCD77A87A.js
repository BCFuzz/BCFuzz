gc();
for (let v2 = 0; v2 < 5; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        this.__lookupSetter__;
        function f6(a7) {
            this[0] *= v2;
            return f6;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f6 });
        this.h = F3;
        this.c = -256;
    }
    new F3();
    function F10(a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a13;
    }
    new F10();
}
gc();
