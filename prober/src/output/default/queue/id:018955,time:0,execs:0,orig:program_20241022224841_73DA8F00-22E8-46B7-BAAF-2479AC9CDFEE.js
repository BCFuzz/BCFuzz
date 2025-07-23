class C0 {
    constructor() {
        for (let i4 = 0, i5 = 10;
            (() => {
                function F6(a8, a9, a10, a11) {
                    if (!new.target) { throw 'must be called with new'; }
                    function F12(a14) {
                        if (!new.target) { throw 'must be called with new'; }
                        this instanceof F12;
                    }
                    new F12(F6);
                    new F12();
                }
                const v18 = new F6(this, C0, i5, C0);
                new F6(i5, v18, this, F6);
                return i4 < i5;
            })();
            i5--) {
        }
    }
}
new C0();
new C0();
new C0();
gc();
