const v1 = new Float32Array();
const v2 = `
    /\u{12345}/myvis;
`;
v2.replaceAll(v1).toWellFormed(v2);
gc();
