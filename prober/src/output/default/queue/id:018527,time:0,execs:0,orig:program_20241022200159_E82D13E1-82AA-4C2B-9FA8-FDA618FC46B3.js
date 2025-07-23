const v0 = `
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = this.constructor;
        try { new v7(F1); } catch (e) {}
    }
    new F1();
    this.constructor.freeze(this);
`;
eval(v0);
gc();
