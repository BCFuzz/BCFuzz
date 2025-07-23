function f0() {
    for (let v3 = 0; v3 < 25; v3++) {
        function F4() {
            if (!new.target) { throw 'must be called with new'; }
            function f6(a7) {
                const v8 = new Float64Array(58766);
                return v8;
            }
            function F9() {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F9();
            Object.defineProperty(this, "c", { configurable: true, set: f6 });
            this.c = -256;
        }
        new F4();
        new F4();
    }
    return f0;
}
f0();
f0();
gc();
