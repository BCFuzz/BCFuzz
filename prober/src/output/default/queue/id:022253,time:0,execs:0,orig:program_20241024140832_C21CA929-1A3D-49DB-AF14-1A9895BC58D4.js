const v2 = `
    const v3 = /\u{12345}/myvis;
    let v4 = Uint8Array;
    const v5 = new v4(v3, 8);
    v3[1962645347] = v5;
    v4++;
`;
const v7 = v2.split(8);
const v8 = [2.0,-4.0];
function f9(a10, a11, a12) {
    return a12;
}
const v13 = f9(v7, v8, v8);
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    try { a19.constructor(v7); } catch (e) {}
}
new F14(v8, f9, v13, F14);
gc();
