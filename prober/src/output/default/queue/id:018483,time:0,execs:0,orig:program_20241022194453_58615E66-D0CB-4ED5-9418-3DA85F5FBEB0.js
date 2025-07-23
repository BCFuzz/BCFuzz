const v0 = `
    let v4 = Array.from("bigint");
    let v5;
    try { v5 = Uint32Array(); } catch (e) {}
    let v6 = -1.0;
    const v7 = v6--;
    v7 !== v7;
    v4 &&= v5;
    for (let v9 = 0; v9 < 5; v9++) {
    }
`;
eval(v0);
gc();
