class C0 {
}
const v1 = new C0();
const v3 = `
    do {
    } while ((() => {
            function f5(a6, a7) {
            }
            return 0;
        })())
    /\u{12345}/myvis;
`;
const v9 = v3.split(8);
function f10(a11, a12, a13) {
}
const v14 = f10();
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    try { a20.constructor(v9); } catch (e) {}
}
new F15(v1, f10, v14, F15);
gc();
