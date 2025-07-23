const v0 = `
    class C1 {
    }
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        this.h = 9223372036854775807;
    }
    const v5 = new F2();
    class C6 extends F2 {
        static #m(a8) {
            [-1e-15];
        }
        static #n(a11, a12) {
            function f13() {
                return C1;
            }
        }
        static d;
        [v5];
    }
    function F14(a16, a17, a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f20() {
        return f20;
    }
    class C21 extends f20 {
    }
`;
eval(v0);
gc();
