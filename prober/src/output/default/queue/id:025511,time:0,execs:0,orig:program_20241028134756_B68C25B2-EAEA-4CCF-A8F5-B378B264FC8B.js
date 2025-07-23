const o1 = {
};
const v3 = `
    const o8 = {
        toString(a5, a6) {
            return [-1.7976931348623157e+308];
        },
    };
    /\u{12345}/myvis;
`;
const v10 = v3.split(3);
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    a16.constructor(v10);
}
try { new F11(3, o1, o1, Int8Array); } catch (e) {}
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
gc();
