const v2 = new Uint32Array(536870912, 536870912, 536870912);
const v3 = `
    class C4 {
        static 6 = 536870912;
    }
`;
const v5 = v3.split(536870912);
const v6 = [2.0,-4.0];
function f7(a8, a9, a10) {
    return Uint32Array;
}
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    try { a16.constructor(v5); } catch (e) {}
}
new F11(v6, f7, v2, F11);
gc();
