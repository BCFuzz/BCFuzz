const v0 = `
    let v2;
    try { v2 = Reflect.get(); } catch (e) {}
    "" + v2;
`;
eval(v0);
gc();
