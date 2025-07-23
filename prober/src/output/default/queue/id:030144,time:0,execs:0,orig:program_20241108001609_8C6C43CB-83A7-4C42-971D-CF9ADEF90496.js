const v2 = `
    function f3(a4) {
        return /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
    }
    class C6 extends f3 {
        8;
    }
`;
const v7 = v2.replaceAll(8, "");
for (let i10 = 265556202, i11 = 10;
    (() => {
        const v12 = 8 < i11;
        class C13 {
            constructor(a15) {
                const v17 = `
                    \`match${C13}getUint32${v7}o\`;
                `;
                const v19 = v17.split(a15);
                v19.reverse();
                v19.flatMap(eval);
            }
        }
        try { new C13(C13); } catch (e) {}
        return v12;
    })();
    i11--) {
}
for (let i30 = 0, i31 = 10; i30 < i31; i31--) {
}
gc();
