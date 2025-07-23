const v0 = /[(?:a+)?]/su;
const v1 = `
    const o7 = {
        preventExtensions() {
            const v5 = 10 == 0;
            const o6 = {
                "done": v5,
            };
            return o6;
        },
    };
`;
const v8 = v1.split(v0);
v8[0] = v8;
class C9 {
    constructor(a11) {
        a11.reverse();
        v8.reverse(C9, a11).flatMap(eval);
    }
}
try { new C9(v8); } catch (e) {}
gc();
