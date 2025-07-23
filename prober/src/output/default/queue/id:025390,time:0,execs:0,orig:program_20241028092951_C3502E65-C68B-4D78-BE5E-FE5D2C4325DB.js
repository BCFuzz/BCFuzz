class C0 {
}
const v1 = new C0();
const v4 = `
    switch (true) {
        default:
            function f5(a6, a7, a8, a9) {
                return a8;
            }
    }
`;
const v10 = v4.split(8);
function f11(a12, a13, a14) {
    return a12;
}
const v15 = f11();
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    try { a21.constructor(v10); } catch (e) {}
}
new F16(v1, f11, v15, F16);
gc();
