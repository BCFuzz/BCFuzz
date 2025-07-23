const v0 = /\P{scx=Greek}(\2)(\1)+/dyvs;
const v1 = `
    for (let i4 = -65535, i5 = 5; i4 < i5;) {
    }
    for (let i13 = 0, i14 = 10; i13 < i14;) {
    }
    /\u{12345}/myvis;
    /aa\fb\nc\rd\te\vf?/gi;
`;
v0.compile(v1).toString();
gc();
