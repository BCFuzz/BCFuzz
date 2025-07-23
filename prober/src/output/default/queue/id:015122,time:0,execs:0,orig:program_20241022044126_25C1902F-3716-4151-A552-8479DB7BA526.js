const v0 = `
    const v1 = /\u{12345}/myvis;
    const v3 = new Int16Array(v1, Int16Array, v0);
    const v5 = new Int32Array(v1, Int32Array);
    v3["lastIndexOf"](...v5);
`;
eval(v0);
gc();
