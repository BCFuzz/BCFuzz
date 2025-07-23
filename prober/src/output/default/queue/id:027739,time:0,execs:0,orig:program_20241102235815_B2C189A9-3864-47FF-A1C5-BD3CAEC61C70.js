const o0 = {
};
for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const v12 = `
    class C13 {
        constructor(a15, a16, a17, a18) {
            function f19(a20) {
                return a17;
            }
        }
    }
`;
const v21 = v12.replaceAll(8, o0);
for (let [i34, i35] = (() => {
        for (let i25 = -3, i26 = 10; i25 < i26; i26--) {
        }
        return [0, 10];
    })();
    i34 < i35;
    i35--) {
}
const v42 = [2.0,-4.0];
function f43(a44, a45, a46) {
    return v42;
}
const v47 = f43();
function F48(a50, a51, a52, a53) {
    if (!new.target) { throw 'must be called with new'; }
    try { a53.constructor(v21); } catch (e) {}
}
new F48(v42, f43, v47, F48);
gc();
