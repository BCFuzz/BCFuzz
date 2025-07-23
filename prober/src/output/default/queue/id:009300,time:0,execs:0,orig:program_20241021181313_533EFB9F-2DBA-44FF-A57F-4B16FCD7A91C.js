class C0 {
    constructor(a2, a3) {
        function F4(a6) {
            if (!new.target) { throw 'must be called with new'; }
        }
        let o8 = {
        };
        const v9 = ++o8;
        class C10 {
            constructor(a12, a13, a14) {
                function F15(a17, a18, a19) {
                    if (!new.target) { throw 'must be called with new'; }
                    Object.defineProperty(this, "g", { writable: true, enumerable: true, value: v9 });
                    this.d = -844734385n;
                    /6(a\1)/dis.exec("getUint32");
                    function F23(a25) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    const v26 = new F23(F23);
                    new F23(v26);
                }
                new F15();
                new F15(F15, C0, a13);
                new F15(C10, C0, a2);
            }
        }
        new C10(this, o8, C0);
        new C10();
    }
}
new C0();
new C0();
gc();
