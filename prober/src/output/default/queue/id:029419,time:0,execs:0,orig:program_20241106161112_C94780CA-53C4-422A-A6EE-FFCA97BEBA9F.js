const v2 = `
    const o7 = {
        [1073741824](a5, a6) {
        },
    };
`;
const v8 = v2.split(8);
const v9 = [2.0,-4.0];
function f10(a11, a12, a13) {
    return 8;
}
const v14 = f10(v9, v9, v8);
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    try { a20.constructor(v8); } catch (e) {}
}
Object.defineProperty(F15, "constructor", { enumerable: true, value: runString });
new F15(v9, f10, v14, F15);
gc();
