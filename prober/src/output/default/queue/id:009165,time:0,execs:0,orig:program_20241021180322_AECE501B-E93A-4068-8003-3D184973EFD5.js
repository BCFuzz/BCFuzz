const v1 = new Map();
const v2 = /\P{scx=Greek}(\2)(\1)+/dyvs;
const v3 = `
    const t3 = "-13";
    t3[1] = v3;
    /\u{12345}/myvis;
`;
v2.compile(v3);
v1[v2];
gc();
