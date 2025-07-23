const v0 = `
    function f1(a2, a3) {
        return a3;
    }
`;
try { BigInt(v0); } catch (e) {}
gc();
