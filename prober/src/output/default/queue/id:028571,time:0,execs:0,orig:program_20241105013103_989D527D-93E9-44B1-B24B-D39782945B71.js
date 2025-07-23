for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = -3, i13 = 10; i13--, i12 <= i13;) {
}
const v20 = /Oaz?/myg;
function f21(a22) {
    const v23 = `
        /\u{12345}/myvis.source[0];
    `;
    return eval(v23);
}
v20[Symbol.toPrimitive] = f21;
const v31 = /B\p{Changes_When_NFKC_Casefolded}/dgiu;
function f32() {
    function f33() {
    }
    return f33;
}
Object.defineProperty(v31, "toString", { enumerable: true, get: f32 });
const v34 = v31 + v20;
try { eval(v34); } catch (e) {}
gc();
