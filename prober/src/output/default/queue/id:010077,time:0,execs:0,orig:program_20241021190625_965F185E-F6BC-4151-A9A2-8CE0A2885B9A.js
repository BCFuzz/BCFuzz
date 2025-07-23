for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
            gc();
        }
        new F5();
    }
    new F1();
}
gc();
