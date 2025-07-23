const v1 = new BigInt64Array();
const v2 = `
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = this.constructor;
        try { new v7(v1, a6); } catch (e) {}
        a6.search(a6);
    }
    new F3(v2, v2);
`;
eval(v2);
gc();
