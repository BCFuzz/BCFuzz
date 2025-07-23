class C0 {
}
const v1 = new C0();
const v3 = `
    const o4 = {
        4294967295: 8,
    };
    /\u{12345}/myvis;
`;
const v6 = v3.split(8);
function f7(a8, a9, a10) {
    return C0;
}
const v11 = f7(f7, 8, v6);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    try { a17.constructor(v6); } catch (e) {}
}
new F12(v1, f7, v11, F12);
gc();
