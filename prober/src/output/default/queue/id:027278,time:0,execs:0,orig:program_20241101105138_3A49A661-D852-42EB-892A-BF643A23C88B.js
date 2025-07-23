for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v10 = [-1.0,7.789217271930966];
const o11 = {
    __proto__: v10,
};
const v13 = `
    [1000000000.0,-2.0,-822.2701748699242,-5.0];
    /\u{12345}/myvis;
`;
const v16 = v13.replaceAll(8, o11);
for (let [i29, i30] = (() => {
        for (let i20 = -3, i21 = 10; i20 < i21; i21--) {
        }
        return [0, 10];
    })();
    i30--, i29 < i30;
    ) {
}
const v37 = [2.0,-4.0];
function f38(a39, a40, a41) {
    return v37;
}
const v42 = f38();
function F43(a45, a46, a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    try { a48.constructor(v16); } catch (e) {}
}
new F43(v37, f38, v42, F43);
gc();
