const v0 = /[(?:a+)?]/su;
const v1 = `
    const o3 = {
        get b() {
            return this;
        },
    };
`;
const v4 = v1.split(v0);
class C5 {
    constructor(a7) {
        const t11 = a7.constructor;
        t11(v4);
    }
}
try { new C5(C5); } catch (e) {}
for (let i14 = 0, i15 = 10; i15--, 8 < i15;) {
}
for (let i24 = -3, i25 = 10; i25--, i24 < i25;) {
}
gc();
