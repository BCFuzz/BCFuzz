function f0() {
    for (let v3 = 0; v3 < 25; v3++) {
        class C5 extends Float32Array {
        }
        new C5();
        function F7() {
            if (!new.target) { throw 'must be called with new'; }
            function f9(a10) {
                new Float64Array(58766);
            }
            Object.defineProperty(this, "c", { configurable: true, set: f9 });
            this.c = -256;
        }
        new F7();
        new F7();
        new F7();
    }
}
f0();
gc();
