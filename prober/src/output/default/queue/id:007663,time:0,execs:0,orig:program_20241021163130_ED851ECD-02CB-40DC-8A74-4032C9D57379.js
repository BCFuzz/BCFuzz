const v2 = `
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F3();
    const v8 = v7.hasOwnProperty(F3, -1.184670302248617e+308, v7, v7);
    let v9;
    try { v9 = v8(); } catch (e) {}
    const v10 = -1.184670302248617e+308 == WeakSet;
    const v11 = v9 ? -1.184670302248617e+308 : WeakSet;
    try { v8(v7, v11, v10, v8, v8); } catch (e) {}
`;
eval(v2);
gc();
