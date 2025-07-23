function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const v12 = new F0();
const v13 = `
    this.globalThis;
    const v16 = this?.SyntaxError;
    let v17;
    try { v17 = new v16(v12); } catch (e) {}
    const t11 = v17.constructor;
    t11();
    this.decodeURIComponent(v13)[129];
`;
Uint8Array.fromBase64(eval(v13));
gc();
