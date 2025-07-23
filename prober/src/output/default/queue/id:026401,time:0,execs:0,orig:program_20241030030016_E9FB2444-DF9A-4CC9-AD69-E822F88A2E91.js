for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = -3, i13 = 10; i13--, i12 <= i13;) {
}
const v20 = /Oaz?/myg;
function f21(a22) {
    const v23 = `
        /\u{12345}/myvis.source;
    `;
    return eval(v23);
}
v20[Symbol.toPrimitive] = f21;
const v30 = /B\p{Changes_When_NFKC_Casefolded}/dgiu;
function f31() {
    return f21;
}
Object.defineProperty(v30, Symbol.toPrimitive, { configurable: true, enumerable: true, get: f31 });
const v33 = v30 + v20;
try { eval(v33); } catch (e) {}
gc();
