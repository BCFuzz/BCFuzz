const v2 = `
    for (let v3 = 0; v3 < 5; v3++) {
        ("268435456")[8];
    }
`;
const v5 = v2.split(8);
v5[1] = v5;
const v6 = [2.0,-4.0];
function f7(a8, a9, a10) {
    return f7;
}
const v11 = f7("268435456", v2, f7);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    try { a17.constructor(v5); } catch (e) {}
}
new F12(v6, f7, v11, F12);
gc();
