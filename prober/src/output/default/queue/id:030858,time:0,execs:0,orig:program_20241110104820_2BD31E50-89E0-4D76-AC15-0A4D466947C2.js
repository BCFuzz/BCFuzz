const v1 = new Int32Array();
const v2 = /[(?:a+)?]/su;
const v3 = `
    let {"byteOffset":v4,"length":v5,} = v1;
`;
const v6 = v3.split(v2);
for (let i10 = -3, i11 = 10;
    (() => {
        const v12 = 0 < i11;
        class C13 {
            constructor(a15) {
                function f16(a17, a18) {
                    for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
                    }
                    return v6;
                }
                Object.defineProperty(a15, Symbol.split, { value: f16 });
                ("").split(a15).reverse().flatMap(eval);
            }
        }
        try { new C13(C13); } catch (e) {}
        return v12;
    })();
    i11--) {
}
const v42 = [-408850.3299178601,1e-15,-Infinity,294.4708077291823,-1.7976931348623157e+308,2.8903375949995187,-1.0,-1.0140544217563424e+308,7.189785026735645];
for (let i44 = v42, i45 = 10; i44 < i45--;) {
}
gc();
