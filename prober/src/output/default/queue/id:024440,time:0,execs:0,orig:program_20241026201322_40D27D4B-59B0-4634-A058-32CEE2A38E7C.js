let v0 = 8;
const v1 = v0--;
const v2 = `
    for (const v5 in Uint32Array(v1, v1, v1)) {
        function f6(a7, a8, a9, a10) {
            return a9;
        }
    }
`;
const v11 = v2.split(v0);
const v12 = [2.0,-4.0];
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.constructor(v11); } catch (e) {}
}
new F14(v12, v1, undefined, F14);
gc();
