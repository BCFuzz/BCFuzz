const v0 = /[(?:a+)?]/su;
const v1 = `
    while (0 < 9) {
        /\u{12345}/myvis;
    }
`;
const v6 = v1.split(v0);
for (let i10 = -3, i11 = 10;
    (() => {
        const v12 = 0 < i11;
        class C13 {
            constructor(a15) {
                const v17 = `
                    \`match${C13}getUint32${v6}o\`;
                `;
                v17.split(a15).reverse().flatMap(eval);
            }
        }
        try { new C13(C13); } catch (e) {}
        return v12;
    })();
    i11--) {
}
const v28 = [-408850.3299178601,1e-15,-Infinity,294.4708077291823,-1.7976931348623157e+308,2.8903375949995187,-1.0,-1.0140544217563424e+308,7.189785026735645];
for (let i30 = v28, i31 = 10; i30 < i31--;) {
}
gc();
