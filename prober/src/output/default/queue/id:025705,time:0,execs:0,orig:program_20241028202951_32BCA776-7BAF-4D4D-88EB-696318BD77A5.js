let v0 = 4;
const v3 = v0++;
const v4 = `
    const o5 = {
        "maxByteLength": 198,
    };
`;
const v6 = v4.split(8);
const v7 = [2.0,-4.0];
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    try { a14.constructor(v6); } catch (e) {}
}
new F9(v7, v3, undefined, F9);
gc();
