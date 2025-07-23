for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = -3, i13 = 10; i13--, i12 <= i13;) {
}
const v20 = /Oaz?/myg;
function f21() {
}
Object.defineProperty(v20, Symbol.toPrimitive, { value: f21 });
function f24(a25) {
    const v26 = `
        /\u{12345}/myvis.source;
    `;
    return eval(v26);
}
const v31 = /B\p{Changes_When_NFKC_Casefolded}/dgiu;
v31.valueOf = f24;
const v32 = v31 + v20;
try { eval(v32); } catch (e) {}
gc();
