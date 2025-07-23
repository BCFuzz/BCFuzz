const v2 = new BigInt64Array();
const v3 = `
    const v4 = [v3];
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        let v9 = a8.search(v4);
        const v10 = v9--;
        v10 | v10;
    }
    [5,F5,v2];
    new F5(v3, v3);
    /\u{12345}/myvis;
`;
eval(v3);
gc();
