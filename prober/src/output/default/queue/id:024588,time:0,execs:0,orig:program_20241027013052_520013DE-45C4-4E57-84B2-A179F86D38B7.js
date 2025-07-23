const v1 = `
    const o2 = {
        "maxByteLength": 4294967295,
    };
    /\u{12345}/mvis;
`;
const v4 = v1.split(4294967295);
const v5 = [2.0,-4.0];
function f6(a7, a8, a9) {
    return a9;
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const v20 = f6();
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    try { a26.constructor(v4); } catch (e) {}
}
new F21(v5, f6, v20, F21);
gc();
