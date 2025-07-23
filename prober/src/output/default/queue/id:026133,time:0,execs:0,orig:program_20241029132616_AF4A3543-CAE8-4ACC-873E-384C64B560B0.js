new Int8Array(Int8Array, Int8Array);
new Uint16Array();
const v4 = `
    function f5() {
        return Uint16Array;
    }
    function f6() {
        return f6;
    }
    function F7() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f9() {
        return F7;
    }
    for (let i12 = (() => {
            for (let i = 0; i < 5; i++) {
                f9();
            }
            return 0;
        })();
        i12 < 21768;
        i12++) {
    }
`;
eval(v4);
gc();
