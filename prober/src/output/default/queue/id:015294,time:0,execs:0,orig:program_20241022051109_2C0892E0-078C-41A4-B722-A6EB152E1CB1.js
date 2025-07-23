for (let v0 = 0; v0 < 10; v0++) {
    function f1() {
        const v2 = /(?:a+)*[EBKw(?:ab)\x60]/mdyu;
        const v3 = v2.exec;
        class C4 {
        }
        const v5 = new C4();
        try { v3(v5); } catch (e) {}
        for (let i9 = 0, i10 = 10;
            i9 < i10;
            (() => {
                function F14(a16, a17, a18, a19) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                new F14(v3);
                i10--;
            })()) {
        }
        return v2;
    }
    f1();
    for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
    }
}
gc();
