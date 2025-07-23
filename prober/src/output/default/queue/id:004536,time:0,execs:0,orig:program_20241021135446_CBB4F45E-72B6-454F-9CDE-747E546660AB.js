const v1 = 64n << 64n;
const v2 = `
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F3();
`;
const v9 = eval(v2);
v9.setUint32 = v1;
try { v9.setUint32(); } catch (e) {}
gc();
