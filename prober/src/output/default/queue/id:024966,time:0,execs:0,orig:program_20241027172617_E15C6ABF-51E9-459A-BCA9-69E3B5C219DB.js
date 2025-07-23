for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const o12 = {
};
const v14 = `
    const o16 = {
        get c() {
            super.b = 341473965;
            return o12;
        },
    };
    /\u{12345}/myvis;
`;
const v18 = v14.split(3);
function F19(a21, a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    a24.constructor(v18);
}
try { new F19(3, o12, o12, Int8Array); } catch (e) {}
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
}
for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
}
gc();
