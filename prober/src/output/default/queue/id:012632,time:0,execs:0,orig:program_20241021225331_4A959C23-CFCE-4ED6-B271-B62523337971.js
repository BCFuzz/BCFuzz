function f0(a1, a2, a3, a4) {
    return a4;
}
const v6 = new Float32Array();
const v7 = `
    /\u{12345}/myvis;
`;
v7.replaceAll(v6, f0);
gc();
