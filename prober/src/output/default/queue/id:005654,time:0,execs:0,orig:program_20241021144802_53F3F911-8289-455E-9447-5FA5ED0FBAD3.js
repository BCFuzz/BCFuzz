const v1 = [16,37822,-60486934,2086949201,1053840339];
const v2 = `
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F3(F3, F3);
    const v8 = v7.hasOwnProperty();
    const v9 = -1.184670302248617e+308 == v1;
    v9 ? -1.184670302248617e+308 : v9;
    try { v8(); } catch (e) {}
`;
eval(v2);
gc();
