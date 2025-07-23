class C9 {
}
const v10 = new C9();
for (let v11 = 0; v11 < 100; v11++) {
    function F12(a14, a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
        function f17() {
            return F12;
        }
        function f18(a19) {
            try { a19.b(this, a19); } catch (e) {}
            return Int8Array;
        }
        Object.defineProperty(a16, "b", { configurable: true, enumerable: true, get: f17, set: f18 });
        try { new a15(this, a14, v10); } catch (e) {}
        a16.b = a16;
    }
    new F12(v11, Int16Array, F12);
    new F12(v11, F12, F12);
}
gc();
