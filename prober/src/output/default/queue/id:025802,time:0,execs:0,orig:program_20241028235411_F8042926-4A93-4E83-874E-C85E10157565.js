const v1 = new Float32Array();
const v2 = `
    /\u{12345}/dyis;
`;
const v4 = v2.replaceAll(v1);
class C6 extends Date {
}
C6.parse(v4);
gc();
