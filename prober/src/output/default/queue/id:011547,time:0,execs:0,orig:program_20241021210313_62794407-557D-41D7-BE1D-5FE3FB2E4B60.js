const v0 = `
    function f1() {
        return v0;
    }
    function f2() {
        return f2;
    }
    function f3(a4) {
        return v0;
    }
    function f5(a6, a7, a8, a9) {
        return a6;
    }
    function f10() {
        return f2;
    }
    function f11(a12) {
        return a12;
    }
    function F13() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function F15(a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C21 {
        static [10n] = 45373n;
    }
    const v22 = [65537,9007199254740992,38256,-18115,65535,9,1,-254833708];
    class C23 {
        static p(a25, a26, a27) {
        }
        static #e = v22;
    }
    function f28() {
        return f11;
    }
    function f29() {
        return f3;
    }
    function f30() {
        return v0;
    }
    class C31 {
        static set e(a33) {
        }
        static get e() {
        }
    }
    function f35() {
        return 10n;
    }
    class C36 {
    }
`;
eval(v0);
gc();
