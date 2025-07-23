const v1 = Array();
const v3 = [Reflect];
const v5 = Reflect.apply(v1.copyWithin, v1, v3);
const v6 = `
    function f7() {
        return v5;
    }
    function f8() {
        return v1;
    }
    function F9() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f11() {
        return v5;
    }
    f11.caller;
    function F13() {
        if (!new.target) { throw 'must be called with new'; }
    }
    F13.length = F13;
    for (let i16 = 0; i16 < 21768; i16++) {
    }
`;
eval(v6);
gc();
