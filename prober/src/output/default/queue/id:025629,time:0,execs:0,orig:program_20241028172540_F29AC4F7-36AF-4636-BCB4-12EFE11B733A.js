const v1 = `
    -Int8Array;
    /\u{12345}/myvis;
`;
new Float32Array(v1);
gc();
