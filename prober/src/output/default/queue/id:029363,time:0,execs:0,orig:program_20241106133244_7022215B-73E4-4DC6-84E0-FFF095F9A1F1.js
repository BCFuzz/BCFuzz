const v3 = `
    const o4 = {
        153970149: 1834665654n,
    };
`;
const v5 = v3.split(8);
const v6 = [2.0,-4.0];
function f7(a8, a9, a10) {
    return a10;
}
const v11 = f7(8, 1834665654n, 1834665654n);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    try { a17.constructor(v5); } catch (e) {}
}
Object.defineProperty(F12, "constructor", { enumerable: true, value: runString });
new F12(v6, f7, v11, F12);
gc();
