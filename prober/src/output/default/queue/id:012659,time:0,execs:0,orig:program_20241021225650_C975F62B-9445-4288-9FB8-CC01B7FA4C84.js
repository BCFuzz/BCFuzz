function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const o5 = {
    };
    function f6(a7, a8) {
    }
    for (let v9 = 0; v9 < 5; v9++) {
        const v11 = new Uint8Array(v9);
        v11.valueOf = f6;
        v11[9] = v11;
    }
    const v12 = new Int32Array();
    const v13 = v12.sort;
    try { v13(); } catch (e) {}
    const v17 = new Uint32Array(1003);
    const v18 = `
        function f19(a20, a21) {
            return f19;
        }
    `;
    eval(v18);
    for (const v24 in v17) {
        for (let v25 = 0; v25 < 5; v25++) {
            v12[v24] = v25;
        }
    }
}
new F0();
gc();
