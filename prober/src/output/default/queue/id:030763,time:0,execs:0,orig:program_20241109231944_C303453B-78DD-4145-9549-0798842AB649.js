const v0 = /[(?:a+)?]/su;
const v1 = `
    const o7 = {
        next() {
            const v5 = 10 == 0;
            const o6 = {
                "done": v5,
            };
            return this;
        },
    };
    /\u{12345}/myvis;
`;
const v9 = v1.split(v0);
v9[0] = v9;
class C10 {
    constructor(a12) {
        a12.reverse();
        v9.reverse(eval, this, v0, a12, eval).flatMap(eval);
    }
}
try { new C10(v9); } catch (e) {}
gc();
