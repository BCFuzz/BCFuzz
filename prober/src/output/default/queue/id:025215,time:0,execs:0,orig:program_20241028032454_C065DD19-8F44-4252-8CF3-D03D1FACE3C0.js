for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const o11 = {
};
const v13 = `
    const o16 = {
        valueOf(a15) {
            return 3;
        },
    };
`;
const v17 = v13.split(3);
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    a23.constructor(v17);
}
try { new F18(3, o11, o11, Int8Array); } catch (e) {}
for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
}
for (let i38 = 0, i39 = 10; i38 < i39; i39--) {
}
gc();
