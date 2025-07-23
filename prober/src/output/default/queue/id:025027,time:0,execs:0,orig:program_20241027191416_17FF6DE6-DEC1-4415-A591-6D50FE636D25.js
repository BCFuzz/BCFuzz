const v2 = `
    switch (false) {
        default:
            break;
        case 8:
            break;
    }
`;
const v3 = v2.split(8);
const v4 = [2.0,-4.0];
function f5(a6, a7, a8) {
    return a7;
}
const v9 = f5();
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    try { a15.constructor(v3); } catch (e) {}
}
new F10(v4, f5, v9, F10);
gc();
