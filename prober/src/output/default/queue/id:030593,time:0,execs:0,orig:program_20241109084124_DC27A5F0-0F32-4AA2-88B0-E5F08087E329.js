function f1() {
    const v2 = /[(?:a+)?]/su;
    const v3 = `
        switch (0) {
        }
    `;
    const v5 = v3.split(v2);
    class C6 {
        constructor(a8) {
            const v10 = `
                \`match${C6}getUint32${v5}o\`;
            `;
            const v12 = v10.split(a8);
            v12.reverse(v12, v10, v10).flatMap(eval);
        }
    }
    try { new C6(C6); } catch (e) {}
    return C6;
}
const t19 = eval(([536870912n,f1]).toLocaleString());
t19();
gc();
