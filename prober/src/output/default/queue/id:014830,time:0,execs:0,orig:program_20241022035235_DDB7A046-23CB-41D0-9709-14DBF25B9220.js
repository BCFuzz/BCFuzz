for (let v0 = 0; v0 < 25; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        for (let i8 = 0, i9 = 10; i8 <= i9; i9--) {
            for (let v16 = 0; v16 < 5; v16++) {
            }
            function f17(a18, a19) {
                a18 / i9;
                return arguments;
            }
            f17();
        }
    }
    new F1();
}
gc();
