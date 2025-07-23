const v0 = [-0.4398870551325462];
const v1 = `
    const v3 = new Map();
    const v5 = v3.has.name;
    let v6;
    try { v6 = v5(); } catch (e) {}
    const t6 = [,v5,...v0];
    t6[1202204298] = v6;
`;
eval(v1);
gc();
