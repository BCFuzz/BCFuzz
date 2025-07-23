function f0() {
    for (let v1 = 0; v1 < 100; v1++) {
        function F2(a4, a5, a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            try { new a7(); } catch (e) {}
            function f9() {
                function F10(a12, a13, a14, a15) {
                    if (!new.target) { throw 'must be called with new'; }
                    a12.Float16Array.from(this);
                }
                new F10(this);
                return f9;
            }
            f9();
            f9();
        }
        new F2(F2, v1, v1, F2);
    }
    return f0;
}
f0();
f0();
f0();
gc();
