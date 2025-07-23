const v3 = `
    const o4 = {
        [-64045]: 8,
    };
`;
const v5 = v3.split(8);
function f6(a7, a8, a9) {
    return a8;
}
const v10 = f6();
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    try { a16.constructor(v5); } catch (e) {}
}
Object.defineProperty(F11, "constructor", { enumerable: true, value: runString });
new F11(v10, f6, v10, F11);
gc();
