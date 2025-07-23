for (let v0 = 0; v0 < 32; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function f6(a7) {
            return this;
        }
        class C8 extends f6 {
            static #g = "bigint";
            static #c = v0;
        }
    }
    new F1();
}
gc();
