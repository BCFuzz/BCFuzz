class C0 {
    toString(a2, a3, a4, a5) {
        function f6() {
            function f7(a8, a9) {
                return a9;
            }
            f7.name = f7;
            return f7;
        }
        Object.defineProperty(this, Symbol.iterator, { configurable: true, enumerable: true, get: f6 });
    }
}
const v12 = new C0();
v12.toString();
try { new Int32Array(v12); } catch (e) {}
gc();
