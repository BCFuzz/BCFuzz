new BigUint64Array(3845);
new Int8Array(2);
new Int16Array(3900);
const v14 = `
    /4[\xf0\x9f\x92\xa9-\xf4\x8f\xbf\xbf]?/myvis;
    const v18 = [v14];
    function F19(a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
        a22.search(v18);
    }
    new F19(v14, v14);
`;
eval(v14);
gc();
