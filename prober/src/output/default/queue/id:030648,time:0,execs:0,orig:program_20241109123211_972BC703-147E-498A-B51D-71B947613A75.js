const v0 = /[(?:a+)?]/su;
const v1 = `
    const o3 = {
        get b() {
            return v0;
        },
    };
`;
const v4 = v1.split(v0);
class C5 {
    constructor(a7) {
        const v9 = `
            \`match${C5}getUint32${v4}o\`;
        `;
        v9.split(a7).reverse().flatMap(eval);
    }
}
function f14() {
    const v16 = `
        /\u{12345}3ya(?!b)*/myvis;
    `;
    const v18 = v16.replaceAll();
    for (let i21 = -3, i22 = 10; 8 < i22; i22--) {
    }
    return v18;
}
C5.toString = f14;
try { new C5(C5); } catch (e) {}
gc();
