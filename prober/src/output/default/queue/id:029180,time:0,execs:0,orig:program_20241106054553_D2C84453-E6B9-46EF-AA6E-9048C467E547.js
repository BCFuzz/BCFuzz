for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v11 = `
    async function* f13(a14, a15, a16) {
        await -882679842;
        /\u{12345}/myvis;
        return f13;
    }
`;
const v19 = v11.split(8);
for (let i22 = 0, i23 = 10; i23; i23--) {
}
const v29 = [2.0,-4.0];
function f30(a31, a32, a33) {
    return a31;
}
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    try { a39.constructor(v19); } catch (e) {}
}
new F34(v29, f30, v19, F34);
gc();
