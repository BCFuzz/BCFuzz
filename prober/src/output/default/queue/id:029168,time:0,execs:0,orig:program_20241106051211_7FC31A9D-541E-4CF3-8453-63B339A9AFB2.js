for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = `
            for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
            }
            async function* f18(a19, a20) {
                const v22 = new BigInt64Array(a20);
                for (const v23 of v22) {
                    const v26 = Date();
                    const v28 = ([0.34424943377405204,617.1629405484582,1000000000000.0,-5.0,321.65301794764264,-1.7976931348623157e+308,4.1484494968864105,174.112881597561,0.8757475954338642,-1000000000.0]).includes(i2, v23);
                    const v30 = Uint32Array();
                    Int16Array.apply(v26, v23, v30, f18, f18, v30, v28);
                }
                return v22;
            }
            f18();
        `;
        for (let i35 = 0, i36 = 10; i35 < i36; i36--) {
        }
        eval(v7).next();
        i3--;
    })()) {
}
for (let i51 = 0, i52 = 10; i51 !== i52; i52--) {
}
gc();
