for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
}
const v20 = [-1.0,7.789217271930966];
const o21 = {
    __proto__: v20,
};
const v23 = `
    const o25 = {
        "maxByteLength": 536870888,
    };
    /\u{12345}/myvis;
`;
const v27 = v23.replaceAll(8, o21);
for (let i30 = 0, i31 = 10; i30 < i31; i31--) {
}
for (let [i70, i71] = (() => {
        for (let [i51, i52] = (() => {
                for (let i41 = -3, i42 = 10; i41 < i42; i42--) {
                }
                return [-3, 10];
            })();
            (() => {
                for (let i55 = 0, i56 = 10; i55 < i56; i56--) {
                }
                return i51 < i52;
            })();
            i52--) {
        }
        return [0, 10];
    })();
    i71--, i70 < i71;
    ) {
}
const v78 = [2.0,-4.0];
function f79(a80, a81, a82) {
    return a80;
}
const v83 = f79(v23, v23, v20);
for (let i87 = 0, i88 = 10; i87 < i88; i88--) {
}
function F95(a97, a98, a99, a100) {
    if (!new.target) { throw 'must be called with new'; }
    try { a100.constructor(v27); } catch (e) {}
}
function f102() {
    return eval;
}
function f103(a104) {
    return v27;
}
Object.defineProperty(F95, "constructor", { enumerable: true, get: f102, set: f103 });
new F95(v78, f79, v83, F95);
gc();
