const v1 = new BigInt64Array();
const v2 = `
    [Infinity,-692904.851289988,1.7297507907305245e+308,-4.200198895266765e+307,4.173887526187709,-3.0,-3.0];
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        const v8 = this.constructor;
        try { new v8(v1, a7); } catch (e) {}
        a7.search(a7);
    }
    new F4(v2, v2);
    /\u{12345}/myvis;
`;
eval(v2);
gc();
