class C2 {
}
const v3 = new C2();
for (let v4 = 0; v4 < 100; v4++) {
    function F5(a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10(a11, a12) {
            const o15 = {
                "maxByteLength": 3071283242,
            };
            new SharedArrayBuffer(1024, o15);
            return 1024;
        }
        this[Symbol.iterator] = f10;
        function f20() {
            return a7;
        }
        function f21(a22) {
            try { a22.b(); } catch (e) {}
            return Int8Array;
        }
        Object.defineProperty(a9, "b", { configurable: true, enumerable: true, get: f20, set: f21 });
        try { new a8(this, a7, v3); } catch (e) {}
        a9.b = a9;
    }
    new F5(v4, Int16Array, F5);
    new F5(v4, F5, F5);
}
gc();
