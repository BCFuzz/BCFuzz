for (let v0 = 0; v0 < 25; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        class C3 {
        }
        new C3();
        for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
            for (let v15 = 0; v15 < 25; v15++) {
            }
        }
        class C16 {
            static 1073741823;
        }
    }
    new F1();
}
gc();
