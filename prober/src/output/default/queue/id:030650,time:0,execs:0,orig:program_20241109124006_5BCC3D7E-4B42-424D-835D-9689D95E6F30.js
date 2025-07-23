const v1 = new Int32Array();
const v2 = /[(?:a+)?]/su;
const v3 = `
    let {"byteOffset":v4,"length":v5,} = v1;
    /\u{12345}/myvis;
`;
const v7 = v3.split(v2);
for (let i11 = -3, i12 = 10;
    (() => {
        const v13 = 0 < i12;
        class C14 {
            constructor(a16) {
                function f17(a18, a19) {
                    for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
                    }
                    return v7;
                }
                Object.defineProperty(a16, Symbol.split, { value: f17 });
                ("").split(a16).reverse().flatMap(eval);
            }
        }
        try { new C14(C14); } catch (e) {}
        return v13;
    })();
    i12--) {
}
const v43 = [-408850.3299178601,1e-15,-Infinity,294.4708077291823,-1.7976931348623157e+308,2.8903375949995187,-1.0,-1.0140544217563424e+308,7.189785026735645];
for (let i45 = v43, i46 = 10; i45 < i46--;) {
}
gc();
