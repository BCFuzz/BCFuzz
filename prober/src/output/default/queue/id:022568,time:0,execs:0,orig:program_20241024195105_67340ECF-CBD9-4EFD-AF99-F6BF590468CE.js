function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7) {
        const o8 = {
        };
        function f9(a10, a11) {
            return f5;
        }
        o8.get = f9;
        o8.get = a7;
        for (let i = 0; i < 5; i++) {
        }
        const v12 = [-4294967296,-256,536870888,1024,9];
        v12.valueOf = f5;
        function f13() {
            return o8;
        }
        function f14(a15) {
            Object.defineProperty(o8, "f", { writable: true, enumerable: true, set: f13 });
            return f14;
        }
        Object.defineProperty(v12, "toString", { configurable: true, enumerable: true, get: f13, set: f14 });
        Math.tan(v12);
        return a2;
    }
    try { f5(a4, F0); } catch (e) {}
}
new F0(F0, F0, F0);
gc();
