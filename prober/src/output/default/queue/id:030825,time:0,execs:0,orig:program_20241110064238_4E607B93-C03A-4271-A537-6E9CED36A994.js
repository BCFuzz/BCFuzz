const v1 = `
    for (let [i4, i5] = (() => {
            class C3 {
            }
            return [10, 10];
        })();
        "n" < i5;
        ) {
    }
`;
const v11 = v1.replaceAll("n");
class C12 {
    constructor(a14) {
        const v16 = `
            \`match${C12}getUint32${v11}o\`;
        `;
        const v18 = v16.split(a14);
        v18.reverse("n");
        v18.flatMap(eval);
    }
}
try { new C12(C12); } catch (e) {}
gc();
