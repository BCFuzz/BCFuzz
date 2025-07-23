function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
v4.a = v4;
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                function f11() {
                    const o14 = {
                        set match(a13) {
                        },
                    };
                    return v5;
                }
            `;
            const v15 = v10.split(a8);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
