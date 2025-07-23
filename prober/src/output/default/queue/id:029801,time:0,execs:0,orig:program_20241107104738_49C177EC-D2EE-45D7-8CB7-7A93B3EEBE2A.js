for (let i3 = 0, i4 = 10 + 10; i4--, i4;) {
}
const v10 = `
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        class C15 {
            static n(a17, a18) {
                const v20 = RegExp(a13);
                /\u{12345}/myvis;
                const v22 = v20 + v20;
                const v23 = \`
                    /aa\fb\nc\rd\te\vf?/gi;
                \`;
                eval(v22);
            }
        }
        try { C15.n(C15, this); } catch (e) {}
    }
    new F11(F11);
    for (let i31 = 0, i32 = 10000; i32--;) {
    }
`;
eval(v10);
gc();
