const v0 = `
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        const v5 = this.constructor;
        try { new v5(a3, a3); } catch (e) {}
    }
    new F1();
    new F1();
`;
eval(v0);
gc();
