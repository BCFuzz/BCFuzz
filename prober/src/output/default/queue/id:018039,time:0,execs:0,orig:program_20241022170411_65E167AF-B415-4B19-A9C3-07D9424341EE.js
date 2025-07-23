for (let v0 = 0; v0 < 25; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        let v4 = 0.5534344452193884;
        class C5 {
            constructor(a7, a8, a9, a10) {
                try { a7(); } catch (e) {}
                function f12(a13, a14) {
                    ~619333362n;
                    ({"length":v4,} = arguments);
                    return this;
                }
                f12();
            }
        }
        new C5(C5);
    }
    new F1();
    new F1();
}
gc();
