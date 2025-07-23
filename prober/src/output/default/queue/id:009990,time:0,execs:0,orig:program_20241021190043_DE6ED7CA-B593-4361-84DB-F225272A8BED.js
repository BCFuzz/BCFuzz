const v2 = [16,37822,-60486934,2086949201,1053840339];
const v3 = `
    class C4 {
    }
    const v5 = new C4();
    const v6 = new C4();
    const v7 = v6.hasOwnProperty(v6, C4, C4, v5, C4);
    const v8 = v2[v5];
    -1.184670302248617e+308 == v8 ? -1.184670302248617e+308 : WeakSet;
    try { v7(v8); } catch (e) {}
`;
eval(v3);
gc();
