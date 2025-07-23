const v0 = /[(?:a+)?]/su;
const v1 = `
    const o3 = {
        get b() {
            return v1;
        },
    };
    /\u{12345}/myvis;
`;
const v5 = v1.split(v0);
class C6 {
    constructor(a8) {
        const t12 = a8.constructor;
        t12(v5);
    }
}
try { new C6(C6); } catch (e) {}
for (let i15 = 0, i16 = 10; i16--, 8 < i16;) {
}
for (let i25 = -3, i26 = 10; i26--, i25 < i26;) {
}
gc();
