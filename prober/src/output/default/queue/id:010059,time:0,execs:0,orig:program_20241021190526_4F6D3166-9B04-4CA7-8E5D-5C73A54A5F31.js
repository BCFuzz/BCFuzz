const v1 = new Map();
const v2 = /\P{scx=Greek}(\2)(\1)+/dyvs;
const v3 = `
    /\u{12345}/myvis;
    class C5 {
    }
`;
v2.compile(v3);
v1[v2];
gc();
