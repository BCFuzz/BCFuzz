const v0 = [-2.2250738585072014e-308,-1000000000.0];
const v1 = `
    let v2;
    try { v2 = v0.next(); } catch (e) {}
    2 - v2;
`;
eval(v1);
gc();
