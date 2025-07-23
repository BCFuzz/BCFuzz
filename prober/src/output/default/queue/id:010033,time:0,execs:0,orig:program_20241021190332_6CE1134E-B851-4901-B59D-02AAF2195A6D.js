class C0 {
}
const v1 = new C0();
for (let v2 = 0; v2 < 100; v2++) {
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            return f8;
        }
        function f9(a10) {
            return F3;
        }
        Object.defineProperty(a7, "b", { configurable: true, enumerable: true, get: f8, set: f9 });
        try { new a6(this, a5, v1); } catch (e) {}
        a7.b = a7;
    }
    new F3(v2, F3, F3);
}
gc();
