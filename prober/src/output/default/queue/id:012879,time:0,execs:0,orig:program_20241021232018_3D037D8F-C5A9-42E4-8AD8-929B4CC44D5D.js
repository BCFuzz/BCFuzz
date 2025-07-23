function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const o4 = {
    };
    for (let v5 = 0; v5 < 5; v5++) {
        const v7 = new Uint8Array(v5);
        v7[9] = Uint8Array;
    }
    const v10 = new Uint32Array(1003);
    const v11 = `
        function f12(a13, a14) {
            return a14;
        }
    `;
    eval(v11);
    for (const v17 in v10) {
        for (let v18 = 0; v18 < 5; v18++) {
        }
    }
}
new F0();
gc();
