for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
}
const v20 = [-1.0,7.789217271930966];
const o21 = {
    __proto__: v20,
};
const v23 = `
    [1000000000.0,-2.0,-822.2701748699242,-5.0];
`;
const v25 = v23.replaceAll(8, o21);
for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
}
for (let [i68, i69] = (() => {
        for (let [i49, i50] = (() => {
                for (let i39 = -3, i40 = 10; i39 < i40; i40--) {
                }
                return [-3, 10];
            })();
            (() => {
                for (let i53 = 0, i54 = 65536; i53 < i54; i54--) {
                }
                return i49 < i50;
            })();
            i50--) {
        }
        return [0, 10];
    })();
    i69--, i68 < i69;
    ) {
}
const v76 = [2.0,-4.0];
function f77(a78, a79, a80) {
    return v20;
}
const v81 = f77(v25, v23, v20);
for (let i85 = 0, i86 = 10; i85 < i86; i86--) {
}
function F93(a95, a96, a97, a98) {
    if (!new.target) { throw 'must be called with new'; }
    try { a98.constructor(v25); } catch (e) {}
}
function f100() {
    return eval;
}
function f101(a102) {
    return a102;
}
Object.defineProperty(F93, "constructor", { enumerable: true, get: f100, set: f101 });
new F93(v76, f77, v81, F93);
gc();
