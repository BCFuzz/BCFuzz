for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v9 = new Int32Array(i3, i3, i3--);
        const v10 = /[\p{Script_Extensions=Mongolian}&&\p{Number}]/su;
        const v11 = `
            let {"byteOffset":v12,"length":v13,} = v9;
            /\u{12345}/myvis;
        `;
        const v15 = v11.split(v10);
        for (let i19 = -3, i20 = 10;
            (() => {
                const v21 = 0 < i20;
                class C22 {
                    constructor(a24) {
                        const v26 = `
                            \`match${C22}getUint32${v15}o\`;
                        `;
                        v26.split(a24).reverse().flatMap(eval);
                    }
                }
                try { new C22(C22); } catch (e) {}
                return v21;
            })();
            i20--) {
        }
        const v37 = [-408850.3299178601,1e-15,-Infinity,294.4708077291823,-1.7976931348623157e+308,2.8903375949995187,-1.0,-1.0140544217563424e+308,7.189785026735645];
        for (let i39 = v37, i40 = 10; i39 < i40--;) {
        }
    })()) {
}
for (let i51 = 0, i52 = 10; i51 < i52; i52--) {
}
for (let i61 = 0, i62 = 10; i61 < i62; i62--) {
}
gc();
