let v0 = 8;
const v1 = v0++;
const v2 = `
    const o4 = {
        "maxByteLength": 981,
    };
`;
const v5 = v2.split(v0);
const v6 = [2.0,-4.0];
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    try { a13.constructor(v5); } catch (e) {}
}
new F8(v6, v1, undefined, F8);
for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
}
gc();
