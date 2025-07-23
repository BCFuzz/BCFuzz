const v1 = `
    class C2 {
    }
    const o7 = {
        toString(a4, a5) {
            /\u{12345}/myvis;
            return C2;
        },
    };
`;
const v8 = v1.repeat(8);
const v9 = [2.0,-4.0];
function f10(a11, a12, a13) {
    return a12;
}
const v14 = f10();
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    try { a20.constructor(v8); } catch (e) {}
}
new F15(v9, f10, v14, F15);
gc();
