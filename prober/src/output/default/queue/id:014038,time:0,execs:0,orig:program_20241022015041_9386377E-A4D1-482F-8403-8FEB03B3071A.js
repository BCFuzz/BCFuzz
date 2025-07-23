const v0 = [1.324940054692974e+308,-2.2250738585072014e-308,-2.220446049250313e-16,1000000000000.0];
const v1 = [3.7806476943374997e+307,0.4839845827563761];
const v3 = `
    const v4 = undefined?.[4294967296];
    try { v0.copyWithin(v4, v4, v4); } catch (e) {}
    let [,,...v6] = v1;
    class C8 {
    }
    const v9 = new C8();
    let v10;
    try { v10 = v9.constructor(); } catch (e) {}
    v10 | true;
    new Int16Array();
`;
eval(v3);
gc();
