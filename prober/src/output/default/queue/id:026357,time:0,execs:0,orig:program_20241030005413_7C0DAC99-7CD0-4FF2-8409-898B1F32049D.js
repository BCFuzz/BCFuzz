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
        /\u{12345}/myvis.source;
    `;
    return eval(v25);
}
v22[Symbol.toPrimitive] = f23;
const v32 = /B\p{Changes_When_NFKC_Casefolded}/dgiu;
v32.valueOf = f1;
const v33 = v32 + v22;
try { eval(v33); } catch (e) {}
gc();
