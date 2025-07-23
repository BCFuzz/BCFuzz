const v0 = `
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F1(F1, F1, F1, v0);
`;
const v9 = eval(v0);
const v11 = Array(v9);
v11[Symbol.iterator] = v9;
try { new WeakSet(v11); } catch (e) {}
gc();
