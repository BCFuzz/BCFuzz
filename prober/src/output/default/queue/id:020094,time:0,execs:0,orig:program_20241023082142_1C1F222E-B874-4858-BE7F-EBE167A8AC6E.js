function f0() {
    for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
    }
    for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
    }
    class C23 {
    }
    for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
    }
    const v34 = new C23();
    for (let v35 = 0; v35 < 10; v35++) {
        function F36(a38, a39, a40) {
            if (!new.target) { throw 'must be called with new'; }
            for (let v41 = 0; v41 < 25; v41++) {
                v41++;
                v41--;
            }
            function f44() {
                return v34;
            }
            function f45(a46) {
                return a46;
            }
            Object.defineProperty(a40, "b", { configurable: true, enumerable: true, get: f44, set: f45 });
            try { new a39(this, a38, v34); } catch (e) {}
            a40.b = a39;
        }
        new F36(v35, F36, F36);
    }
    for (let v49 = 0; v49 < 25; v49++) {
        function F50() {
            if (!new.target) { throw 'must be called with new'; }
            function f52(a53) {
                new Float64Array(58766);
                return Float64Array;
            }
            f52();
            Object.defineProperty(this, "c", { configurable: true, set: f52 });
            this.c = -256;
        }
        new F50();
        new F50();
    }
    return C23;
}
f0();
f0();
gc();
