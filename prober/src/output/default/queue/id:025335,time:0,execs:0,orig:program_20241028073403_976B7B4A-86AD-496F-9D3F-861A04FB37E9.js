const v0 = `
    /\u{12345}/myvis;
`;
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const v12 = [59395,6,21325];
function f13() {
}
v12.toString = f13;
function F14() {
    if (!new.target) { throw 'must be called with new'; }
}
const v16 = new F14();
v16[Symbol.toStringTag] = v0;
const v19 = v12 + v16;
try { eval(v19); } catch (e) {}
gc();
