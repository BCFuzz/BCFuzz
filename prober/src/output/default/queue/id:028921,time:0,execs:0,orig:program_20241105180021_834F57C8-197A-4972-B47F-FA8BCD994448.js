const v2 = `
    const o3 = {
        153970149: 9007199254740990,
    };
`;
const v4 = v2.split(9007199254740990);
const v5 = [2.0,-4.0];
function f6(a7, a8, a9) {
    return a7;
}
const v10 = f6(runString, v2, v4);
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    try { a16.constructor(v4); } catch (e) {}
}
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
Object.defineProperty(F11, "constructor", { enumerable: true, value: runString });
new F11(v5, f6, v10, F11);
gc();
