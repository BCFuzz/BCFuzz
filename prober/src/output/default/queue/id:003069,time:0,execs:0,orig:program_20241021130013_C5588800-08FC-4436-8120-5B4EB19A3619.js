for (let v0 = 0; v0 < 10; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function f5(a6) {
            return f5;
        }
        class C7 extends f5 {
        }
        C7.name;
    }
    new F1(F1, F1);
}
gc();
