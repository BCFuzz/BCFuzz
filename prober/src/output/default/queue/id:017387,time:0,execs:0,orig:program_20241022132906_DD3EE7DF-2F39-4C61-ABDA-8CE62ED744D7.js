function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = `
    /\u{12345}/myvis;
    function f5(a6) {
        switch (v2) {
            case a6:
                break;
            case F0:
                break;
        }
        return a6;
    }
`;
eval(v3);
gc();
