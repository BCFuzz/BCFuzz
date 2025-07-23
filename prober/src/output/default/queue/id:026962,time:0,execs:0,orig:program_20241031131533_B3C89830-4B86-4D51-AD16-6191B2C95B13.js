class C0 {
}
const v1 = new C0();
const v3 = `
    function f4(a5, a6, a7, a8) {
        return a5;
    }
    /\u{12345}/myvis;
`;
const v10 = v3.split(8);
const v11 = v10.pop();
function f12(a13, a14, a15) {
    return v11;
}
const v16 = f12();
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    try { a22.constructor(v10); } catch (e) {}
}
new F17(v1, f12, v16, F17);
gc();
