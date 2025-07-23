function f0() {
    const o2 = {
        "b": 0,
    };
    return o2;
}
class C3 extends f0 {
}
const v4 = new C3();
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                const v11 = \`
                    \\\`bigint${0.32888887978694226}1073741823\\\`;
                \`;
            `;
            const v14 = v10.split(a8);
            v14.reverse();
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
