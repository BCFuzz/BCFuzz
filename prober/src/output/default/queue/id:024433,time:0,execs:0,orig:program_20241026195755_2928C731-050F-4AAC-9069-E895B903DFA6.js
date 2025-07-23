let v0 = 8;
const v1 = v0--;
const v2 = `
    class C3 {
        static n(a5, a6, a7, a8) {
            for (const v11 in Uint32Array()) {
                function f12(a13, a14, a15, a16) {
                }
            }
        }
    }
`;
const v17 = v2.split(v0);
const v18 = [2.0,-4.0];
function F20(a22, a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    try { a25.constructor(v17); } catch (e) {}
}
new F20(v18, v1, undefined, F20);
gc();
