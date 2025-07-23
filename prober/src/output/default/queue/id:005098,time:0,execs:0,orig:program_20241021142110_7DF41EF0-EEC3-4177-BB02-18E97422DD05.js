for (const v1 of [-1000000.0,-977966.8678253988,0.5899305666694178,Infinity,-9.873805875681943e+307,-1000000.0]) {
    const v3 = new BigInt64Array();
    const v4 = `
        try { v3(BigInt64Array); } catch (e) {}
        function F6(a8, a9, a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
        }
    `;
    eval(v4);
}
gc();
