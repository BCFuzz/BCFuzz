const v3 = `
    const o7 = {
        [8](a5, a6) {
        },
    };
`;
const v8 = v3.split(8);
const v9 = [2.0,-4.0];
function f10(a11, a12, a13) {
    return 8;
}
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.constructor(v8); } catch (e) {}
}
Object.defineProperty(F14, "constructor", { enumerable: true, value: runString });
new F14(v9, f10, 1887, F14);
gc();
