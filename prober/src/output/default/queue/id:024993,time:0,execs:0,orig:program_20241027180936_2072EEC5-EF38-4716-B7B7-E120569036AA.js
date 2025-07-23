class C0 {
}
const v1 = new C0();
const v4 = `
    switch (true) {
        default:
            function f5(a6, a7, a8, a9) {
                const o10 = {
                    7: a9,
                };
                return a6;
            }
    }
    /\u{12345}/myvis;
`;
const v12 = v4.split(8);
function f13(a14, a15, a16) {
    return C0;
}
const v17 = f13(C0, v1, v4);
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    try { a23.constructor(v12); } catch (e) {}
}
new F18(v1, f13, v17, F18);
gc();
