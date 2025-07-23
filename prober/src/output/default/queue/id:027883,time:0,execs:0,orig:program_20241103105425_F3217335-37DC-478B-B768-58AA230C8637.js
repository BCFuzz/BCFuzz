class C1 {
}
const v2 = new C1();
const v4 = `
    const o5 = {
        [-2]: -6.167231436903085e+307,
    };
    /\u{12345}/myvis;
`;
const v7 = v4.split(8);
function f8(a9, a10, a11) {
    return a11;
}
const v12 = f8();
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    try { a18.constructor(v7); } catch (e) {}
}
new F13(v2, f8, v12, F13);
gc();
