const v1 = new Float32Array();
const v2 = `
    /\u{12345}/dyis;
`;
v2.replaceAll(v1).isWellFormed();
gc();
