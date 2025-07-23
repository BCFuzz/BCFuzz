for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 5; v13++) {
        function f14(a15) {
            return this;
        }
        function f16() {
            return F10;
        }
        function f17(a18) {
            return a18;
        }
        Object.defineProperty(f14, "constructor", { configurable: true, get: f16, set: f17 });
        const v19 = f14();
        const v20 = f14();
        const v21 = f14();
        function F22(a24, a25, a26) {
            if (!new.target) { throw 'must be called with new'; }
            function f27(a28, a29) {
                return a28;
            }
            a26.constructor = f27;
        }
        function f30() {
            return a12;
        }
        function f31(a32) {
            return F22;
        }
        Object.defineProperty(F22, "constructor", { configurable: true, enumerable: true, get: f30, set: f31 });
        new F22(v20, v21, F22);
        new F22(v19, v20, f14);
    }
}
new F10(F10);
gc();
