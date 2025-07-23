function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 5; v4++) {
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v7 = new F5();
        v7.constructor;
        const v9 = new F5();
        this.__proto__ = v9;
        function f10(a11) {
            return F0;
        }
        class C12 extends f10 {
            static [this];
        }
    }
}
new F0();
gc();
