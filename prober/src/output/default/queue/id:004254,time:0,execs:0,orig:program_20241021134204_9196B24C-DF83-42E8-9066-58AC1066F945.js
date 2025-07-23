function f0() {
    for (let v3 = 0; v3 < 32; v3++) {
        function F4() {
            if (!new.target) { throw 'must be called with new'; }
            this.h = F4;
            function f6(a7) {
                new Float64Array(58766);
            }
            Object.defineProperty(this, "c", { configurable: true, set: f6 });
            this.h = F4;
            this.c = -256;
        }
        new F4();
        new F4();
        class C12 {
            constructor(a14, a15, a16) {
                super.h = 58766;
            }
        }
        new C12(f0, f0, C12);
    }
}
f0();
f0();
f0();
gc();
