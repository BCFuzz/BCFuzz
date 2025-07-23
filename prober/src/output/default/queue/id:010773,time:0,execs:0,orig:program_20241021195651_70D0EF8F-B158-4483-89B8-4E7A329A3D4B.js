const v0 = `
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f3() {
        return v0;
    }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function F10(a12) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function F13(a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f17(a18, a19) {
        return v0;
    }
    function F20() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f22() {
        return v0;
    }
`;
eval(v0);
gc();
