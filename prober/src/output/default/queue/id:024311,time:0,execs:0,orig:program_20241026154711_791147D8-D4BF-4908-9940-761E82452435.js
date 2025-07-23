const v2 = ([])[3129];
const v4 = v2 != WeakSet ? v2 : WeakSet;
const v5 = `
    class C6 {
    }
    try { C6(); } catch (e) {}
    const v9 = [0.6475337157844889,-3.0,4.0,1.0];
    class C11 {
        f = Int16Array;
    }
    new C11();
    2147483648 != 2147483648;
    const o16 = {
        "maxByteLength": 2147483648,
    };
    let v17 = 512;
    v17--;
    const v19 = new ArrayBuffer(v17, o16);
    try { v19.resize(4); } catch (e) {}
    const v22 = new Uint8ClampedArray(v19);
    const v23 = [8];
    function F24(a26, a27) {
        if (!new.target) { throw 'must be called with new'; }
        v22[v23] = a26;
    }
    const v28 = [-1e-15,4.0,-5.0,-164344.1790849612,Infinity,NaN,581778.0884255653];
    try { v28.entries(); } catch (e) {}
    [1000.0,2.053124045762953];
    v9["sort"](v4);
    switch (C6) {
        case v2:
            break;
    }
`;
eval(v5);
gc();
