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
                try { a6(); } catch (e) {}
                this.constructor = f17;
                this.constructor();
            }
            new F11();
            new F11();
            const v25 = new F11();
            return v25;
        }
        f9();
    }
    new F3();
    const v28 = new F3(a1, a1);
    const t26 = v28.constructor;
    new t26();
    const v31 = v28.constructor;
    new v31(v31, v31);
    new F3(f0, a2);
    return f0;
}
f0(f0, f0);
gc();
