for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v13 = `
    -58113 !== 578.2330446482174 ? -58113 : 578.2330446482174;
`;
const v17 = v13.split(8);
function f18(a19, a20, a21) {
    return a20;
}
const v22 = f18();
function F23(a25, a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    try { a28.constructor(v17); } catch (e) {}
}
Object.defineProperty(F23, "constructor", { enumerable: true, value: runString });
new F23(v22, f18, v22, F23);
gc();
