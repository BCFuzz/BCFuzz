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
                    \\\`bigint\\\`;
                \`;
                /\u{12345}/myvis;
            `;
            const v14 = v10.split(a8);
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
