const v1 = `
    const o3 = {
        "maxByteLength": 1948,
    };
    /\u{12345}/myvis;
`;
const v5 = v1.split(8);
v5[1] = v5;
const v6 = [2.0,-4.0];
function f7(a8, a9, a10) {
    return a8;
}
const v11 = f7();
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    try { a17.constructor(v5); } catch (e) {}
}
new F12(v6, f7, v11, F12);
gc();
