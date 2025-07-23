const v0 = `
    const v2 = new Float32Array();
    /\u{12345}/myvis;
    let [,,v4,v5] = v2;
`;
eval(v0);
gc();
