const v0 = [257,11,-4294967295,-4294967296,257,8,11,-256];
const v3 = `
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v8 = new F4(F4, WeakSet);
    const v9 = v8.hasOwnProperty();
    const v10 = -1.184670302248617e+308 == WeakSet;
    const v12 = 3n != v0;
    v10 ? -1.184670302248617e+308 : WeakSet;
    try { v9(v10, v12); } catch (e) {}
`;
eval(v3);
gc();
