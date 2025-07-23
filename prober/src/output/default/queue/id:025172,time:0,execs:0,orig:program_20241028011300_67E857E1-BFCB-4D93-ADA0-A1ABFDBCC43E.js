class C1 {
}
const v2 = new C1();
const v4 = `
    do {
        function f6() {
            return 536870889;
        }
    } while (0 < 5)
    /\u{12345}/myvis;
`;
const v10 = v4.split(8);
function f11(a12, a13, a14) {
    return a14;
}
const v15 = f11(8, C1, f11);
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    try { a21.constructor(v10); } catch (e) {}
}
new F16(v2, f11, v15, F16);
gc();
