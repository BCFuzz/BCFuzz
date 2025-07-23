const v1 = `
    for (let [i4, i5] = (() => {
            class C3 {
            }
            return [10, 10];
        })();
        "n" < i5;
        ) {
        /.[a[^R\u{12345}]*]/dyvi;
    }
`;
const v12 = v1.replaceAll("n");
class C13 {
    constructor(a15) {
        const v17 = `
            \`match${C13}getUint32${v12}o\`;
        `;
        const v19 = v17.split(a15);
        v19.reverse();
        v19.flatMap(eval);
    }
}
try { new C13(C13); } catch (e) {}
gc();
