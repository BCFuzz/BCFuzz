const v1 = new Uint8ClampedArray();
const v2 = `
    /\u{12345}/myvis;
`;
const v4 = v2.split(v1);
function f5(a6, a7, a8) {
    return a6;
}
const v9 = f5.constructor;
try { new v9(v4); } catch (e) {}
gc();
