const v3 = `
    8 != "" ? 8 : "";
    /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
`;
const v7 = v3.replaceAll(8, "");
class C8 {
    constructor(a10) {
        const v12 = `
            \`match${C8}getUint32${v7}o\`;
        `;
        const v14 = v12.split(a10);
        v14.reverse();
        v14.flatMap(eval);
    }
}
try { new C8(C8); } catch (e) {}
gc();
