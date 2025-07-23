for (let v0 = 0; v0 < 100; v0++) {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                a10.Float16Array.from(this);
            }
            new F8(this);
            return a3;
        }
        f7();
    }
    new F1(F1, v0, v0, F1);
}
gc();
