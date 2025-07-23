const v0 = `
    Int32Array.from(v0, Int32Array, Int32Array);
    /\u{12345}/myvis;
`;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a7;
}
const v9 = new F5(Int32Array);
const t9 = v9.g;
new t9(v0);
gc();
