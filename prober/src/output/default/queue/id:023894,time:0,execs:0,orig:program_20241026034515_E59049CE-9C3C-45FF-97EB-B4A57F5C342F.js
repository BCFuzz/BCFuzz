for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const o11 = {
};
const v13 = `
    const o18 = {
        toString(a15, a16) {
            [-1.7976931348623157e+308];
            return a16;
        },
    };
    /\u{12345}/myvis;
`;
const v20 = v13.split(3);
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    a26.constructor(v20);
}
try { new F21(3, o11, o11, Int8Array); } catch (e) {}
for (let i31 = 0, i32 = 10; i31 < i32; i32--) {
}
for (let i41 = 0, i42 = 10; i41 < i42; i42--) {
}
gc();
