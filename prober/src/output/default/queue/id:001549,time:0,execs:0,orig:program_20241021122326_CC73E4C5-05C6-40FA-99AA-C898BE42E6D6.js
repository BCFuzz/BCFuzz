const v0 = /(a)\1/dyvgs;
const v2 = `
    v0[4294967295];
    for (let v4 = 0; v4 < 5; v4++) {
        const t4 = "valueOf";
        t4["p" + v4] = v4;
    }
`;
eval(v2);
gc();
