for (let v0 = 0; v0 < 5; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        class C3 {
        }
        const v4 = new C3();
        for (let v5 = 0; v5 < 100; v5++) {
        }
        function f6() {
            return f6;
        }
        v4.constructor = f6;
    }
    new F1();
}
gc();
