const v1 = `
    while (0 < 3) {
    }
`;
const v5 = v1.split(3);
const v6 = [2.0,-4.0];
function f7(a8, a9, a10) {
    return a8;
}
const v11 = f7();
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    try { a17.constructor(v5); } catch (e) {}
}
for (let i21 = -3, i22 = 10; i22-- < i22;) {
}
new F12(v6, f7, v11, F12);
for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
}
gc();
