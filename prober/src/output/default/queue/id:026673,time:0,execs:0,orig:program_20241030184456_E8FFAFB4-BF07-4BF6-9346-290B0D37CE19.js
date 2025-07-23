function f1() {
    return -268435456;
}
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
for (let i14 = -3, i15 = 10; i15--, i14 <= i15;) {
}
const v22 = /Oaz?/myg;
function f23(a24) {
    const v25 = `
        /\u{12345}/myvis.source[1];
    `;
    return eval(v25);
}
v22[Symbol.toPrimitive] = f23;
const v33 = /B\p{Changes_When_NFKC_Casefolded}/dgiu;
v33.valueOf = f1;
const v34 = v33 + v22;
try { eval(v34); } catch (e) {}
gc();
