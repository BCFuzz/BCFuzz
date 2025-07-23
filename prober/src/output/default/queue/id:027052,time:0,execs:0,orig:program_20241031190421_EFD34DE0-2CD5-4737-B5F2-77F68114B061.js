function f0(a1, a2) {
    return f0;
}
class C3 extends f0 {
    static #a;
    p(a5, a6, a7, a8) {
        a7.#a;
    }
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (let i22 = -3, i23 = 10; i23--, i22 <= i23;) {
}
const v30 = /Oaz?/myg;
function f31(a32) {
    const v33 = `
        /\u{12345}/myvis.source;
    `;
    return eval(v33);
}
v30[Symbol.toPrimitive] = f31;
const v40 = C3 + v30;
try { eval(v40); } catch (e) {}
gc();
