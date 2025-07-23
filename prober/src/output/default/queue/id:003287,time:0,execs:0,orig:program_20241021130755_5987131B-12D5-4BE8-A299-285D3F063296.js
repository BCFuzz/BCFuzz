function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0();
const v7 = `
    let v8 = 2;
    1 / Infinity;
    ++v8;
    const v14 = new Date();
    class C15 extends Date {
        constructor(a17, a18) {
            super();
            gc();
            for (let v21 = 0; v21 < 5; v21++) {
                v14["p" + v21] = v21;
            }
        }
    }
    const v24 = new C15();
    class C25 extends C15 {
    }
    new C25();
    for (let i = 0; i < 5; i++) {
        function f28(a29) {
        }
        class C30 extends f28 {
            static [v6];
        }
        v24["toISOString"]();
    }
`;
eval(v7);
gc();
