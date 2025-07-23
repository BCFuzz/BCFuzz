function f0(a1, a2) {
    function F3(a5, a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            function F11(a13, a14, a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                function f17(a18) {
                    class C19 {
                        get c() {
                        }
                    }
                    return arguments;
                }
                this.constructor = f17;
                this.constructor();
            }
            new F11(F11, f9, this, a8);
            new F11(F11, F11, a2, f0);
            return F3;
        }
        f9();
    }
    new F3(a1, a1, a1, f0);
    const v26 = new F3(f0, a2, F3, a1);
    return v26;
}
const v27 = f0(f0, f0);
f0(f0, f0(v27, v27));
gc();
