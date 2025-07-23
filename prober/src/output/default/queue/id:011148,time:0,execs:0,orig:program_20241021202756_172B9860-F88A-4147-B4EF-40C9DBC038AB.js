for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
const v15 = new Uint8Array();
const v17 = new Map();
v17.set();
for (const v19 in v15) {
}
const v22 = `
    const o25 = {
    };
    class C27 extends Date {
        constructor(a29, a30) {
            super();
            class C31 {
                static set f(a33) {
                }
            }
            for (let v35 = 0; v35 < 25; v35++) {
                "p" + v35;
            }
        }
    }
    const v39 = new C27();
    new C27();
    for (let i = 0; i < 5; i++) {
        v39["toISOString"]();
    }
`;
eval(v22);
gc();
