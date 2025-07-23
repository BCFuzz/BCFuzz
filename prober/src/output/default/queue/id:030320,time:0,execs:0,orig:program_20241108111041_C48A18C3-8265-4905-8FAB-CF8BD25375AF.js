const v2 = `
    function f3(a4) {
        return /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
    }
    class C6 extends f3 {
        static 8;
    }
`;
const v7 = v2.replaceAll(8, "");
class C8 {
    constructor(a10) {
        const v12 = `
            \`match${C8}getUint32${v7}o\`;
        `;
        const v14 = v12.split(a10);
        v14.reverse(a10, v12, v14, eval);
        v14.flatMap(eval);
    }
}
try { new C8(C8); } catch (e) {}
gc();
