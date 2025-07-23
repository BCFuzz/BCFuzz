class C3 {
}
class C4 {
    constructor(a6, a7) {
        const v8 = `
            new Map();
            for (let v11 = 0; v11 < 5; v11++) {
                ("p" + v11).codePointAt;
            }
            let v15 = 128;
            const v16 = v15--;
            v16 + v16;
            new Float64Array(v15, v16);
            for (let v20 = 0; v20 < 5; v20++) {
                "p" + v20;
            }
            eval();
            for (let v25 = 0; v25 < 5; v25++) {
                -v25;
            }
        `;
        eval.constructor;
        eval(v8);
    }
}
new C4();
gc();
