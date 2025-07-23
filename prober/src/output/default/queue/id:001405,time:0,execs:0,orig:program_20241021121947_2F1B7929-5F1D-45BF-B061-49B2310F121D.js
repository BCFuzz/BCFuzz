const v2 = new Int32Array(102, 102, 102);
const v3 = v2[102];
const v4 = `
    try { v3(102, v4, 102); } catch (e) {}
    let v6 = 2147483648;
    +(++v6);
`;
eval(v4);
gc();
