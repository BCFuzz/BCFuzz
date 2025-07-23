const v0 = `
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F1();
    v7.isPrototypeOf(v0, v7, v7, F1);
`;
const v10 = eval(v0);
const v12 = Array();
v12[Symbol.iterator] = v10;
try { new Int32Array(v12); } catch (e) {}
gc();
