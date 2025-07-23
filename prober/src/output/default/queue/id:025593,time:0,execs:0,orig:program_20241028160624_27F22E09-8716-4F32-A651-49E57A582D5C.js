const v0 = /a??/mgiu;
class C1 {
}
const v2 = new C1();
const v4 = `
    switch (v0) {
    }
`;
const v5 = v4.split(8);
function f6(a7, a8, a9) {
}
const v10 = f6();
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    try { a16.constructor(v5); } catch (e) {}
}
new F11(v2, f6, v10, F11);
gc();
