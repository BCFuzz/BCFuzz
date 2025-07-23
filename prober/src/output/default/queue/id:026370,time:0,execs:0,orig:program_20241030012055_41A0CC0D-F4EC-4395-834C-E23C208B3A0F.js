const v2 = `
    async function f3(a4, a5, a6) {
        return a6;
    }
    /\u{12345}/myvis;
`;
const v8 = v2.split(3);
const v9 = [2.0,-4.0];
function f10(a11, a12, a13) {
    return v8;
}
const v14 = f10();
v14.unshift("0");
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    try { a21.constructor(v8); } catch (e) {}
}
new F16(v9, f10, v14, F16);
gc();
