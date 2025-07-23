const v1 = new Float32Array();
const v2 = `
    /\u{12345}/myvis;
`;
const v4 = v2.replaceAll(v1);
let v5 = /.I[\c!]/dis;
[v5--,...v4];
gc();
