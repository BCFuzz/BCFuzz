function f0(a1) {
    return f0;
}
const v2 = `
    /\u{12345}/myvis;
`;
v2.replace(/(?!\1(a\1)\1)\1/dygis, f0);
gc();
