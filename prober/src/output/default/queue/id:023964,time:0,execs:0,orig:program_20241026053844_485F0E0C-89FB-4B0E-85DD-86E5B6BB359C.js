const v1 = `
    class C2 {
        constructor(a4) {
            const v6 = new Uint8Array(this, 8, a4);
            for (const v7 in v6) {
            }
        }
    }
    /\u{12345}/myvis;
`;
const v9 = v1.split(8);
const v10 = [2.0,-4.0];
function f11(a12, a13, a14) {
    return a12;
}
const v15 = f11(f11, v9, v10);
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    try { a21.constructor(v9); } catch (e) {}
}
new F16(v10, f11, v15, F16);
gc();
