const v1 = `
    let v2 = 0;
    const v3 = v2++;
    const o8 = {
        toString(a5, a6) {
            /\u{12345}/myvis;
            return v3;
        },
    };
`;
const v9 = v1.repeat(8);
const v10 = [2.0,-4.0];
function f11(a12, a13, a14) {
    return a14;
}
const v15 = f11();
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    try { a21.constructor(v9); } catch (e) {}
}
new F16(v10, f11, v15, F16);
gc();
