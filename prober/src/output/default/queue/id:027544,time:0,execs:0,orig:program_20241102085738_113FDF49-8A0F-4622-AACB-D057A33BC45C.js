const v3 = `
    [16709,-14,65536,512,-58199,-11836,2053447017,-2147483649];
    [-14688,-2147483647,-1943135423,512,-4294967296];
    const t1 = /\u{12345}/myvis;
    t1[-128] = -4294967295;
`;
const v7 = v3.split(8);
v7[6] = v7;
const v8 = [2.0,-4.0];
function f9(a10, a11, a12) {
    return -128;
}
const v13 = f9(-128, f9, 8);
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.constructor(v7); } catch (e) {}
}
new F14(v8, f9, v13, F14);
gc();
