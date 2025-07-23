const v1 = `
    const o7 = {
        ...8.421959965099472,
        toString(a4, a5) {
            /\u{12345}/myvis;
            return this;
        },
    };
`;
for (let i10 = 0, i11 = 10; i10 !== i11; i11--) {
}
const v18 = v1.split(8);
const v19 = [2.0,-4.0];
function f20(a21, a22, a23) {
    return a22;
}
const v24 = f20();
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    try { a30.constructor(v18); } catch (e) {}
}
for (let i35 = 0, i36 = 10 + 10; i36--, i36;) {
}
new F25(v19, f20, v24, F25);
gc();
