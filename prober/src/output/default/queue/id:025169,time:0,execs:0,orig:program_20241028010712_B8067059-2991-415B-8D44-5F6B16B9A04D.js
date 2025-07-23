for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const o12 = {
};
const v14 = `
    const o19 = {
        [1073741824](a16, a17, a18) {
        },
    };
    /\u{12345}/myvis;
`;
const v21 = v14.split(3);
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    a27.constructor(v21);
}
try { new F22(3, o12, o12, Int8Array); } catch (e) {}
for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
}
for (let i42 = 0, i43 = 10; i42 < i43; i43--) {
}
gc();
