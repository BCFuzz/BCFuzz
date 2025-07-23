for (let v0 = 0; v0 < 100; v0++) {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        try { new a6(); } catch (e) {}
        function f8() {
            function F9(a11, a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                a11.Float16Array.from(this);
            }
            new F9(this);
            return a5;
        }
        f8();
        f8();
    }
    new F1(F1, v0, v0, F1);
}
gc();
