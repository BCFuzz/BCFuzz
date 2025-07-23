for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function F9(a11, a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                const t6 = a11.Float16Array;
                new t6(arguments);
            }
            new F9(this, a3);
            return this;
        }
        f7();
    }
    new F1(v0);
}
gc();
