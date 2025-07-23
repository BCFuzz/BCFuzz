function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
    const v3 = `
        const v5 = new Int32Array();
        const v7 = new Uint32Array();
        for (const v8 in v7) {
            for (let v9 = 0; v9 < 5; v9++) {
                v2 <= F0 ? v2 : F0;
                const v13 = "p" + v9;
                try { v13.strike(); } catch (e) {}
                v5[v13] = v9;
            }
        }
        for (let i17 = 0, i18 = 10; i18--, i17 < i18;) {
        }
    `;
    eval(v3);
}
new F0();
gc();
