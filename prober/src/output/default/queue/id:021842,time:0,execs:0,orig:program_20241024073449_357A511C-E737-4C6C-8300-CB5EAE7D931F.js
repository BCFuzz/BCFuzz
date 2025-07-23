for (let v0 = 0; v0 < 10; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = new F1(F1, F1, F1);
    function f7(a8) {
        const v9 = `
            const v11 = new Map();
            for (let v12 = 0; v12 < 5; v12++) {
                const v13 = v12 <= v12;
                const v14 = v13 || v13;
                const v17 = new Float64Array(694);
                for (const v18 of v17) {
                }
                v11.get(v14);
            }
        `;
        eval(v9);
        return v6;
    }
    v6.constructor = f7;
    const t21 = v6.constructor;
    t21();
}
gc();
