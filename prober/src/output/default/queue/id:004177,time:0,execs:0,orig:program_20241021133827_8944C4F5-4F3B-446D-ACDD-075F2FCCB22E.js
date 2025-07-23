const v1 = `
    let [,...v2] = "c";
    const v3 = v2.push;
    try { v3(); } catch (e) {}
`;
eval(v1);
gc();
