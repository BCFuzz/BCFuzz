const v0 = `
    function f1() {
        return f1;
    }
    function f2() {
        return f1;
    }
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f5() {
        return F3;
    }
    function F6() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f8(a9) {
        return v0;
    }
    for (let i11 = 0; i11 < 21768; i11++) {
    }
    function f17() {
        return v0;
    }
    function f18() {
        return v0;
    }
`;
eval(v0);
gc();
