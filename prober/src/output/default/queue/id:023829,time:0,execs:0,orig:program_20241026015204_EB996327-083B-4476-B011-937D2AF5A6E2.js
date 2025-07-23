const v2 = `
    /\u{12345}/myvis;
    const o5 = {
        "maxByteLength": 268435456,
    };
`;
const v6 = v2.split(8);
const v7 = [2.0,-4.0];
function f8(a9, a10, a11) {
    return a10;
}
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    try { a17.constructor(v6); } catch (e) {}
}
new F12(v7, f8, BigInt64Array, F12);
gc();
