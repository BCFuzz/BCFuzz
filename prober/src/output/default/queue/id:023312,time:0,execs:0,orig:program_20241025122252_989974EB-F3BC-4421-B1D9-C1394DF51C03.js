const v0 = `
    const v2 = /\u0060/v.source;
    function f3(a4, a5) {
        return v0;
    }
    const v6 = new f3();
    const v7 = v6.__defineSetter__;
    try { v7.constructor(v2); } catch (e) {}
`;
eval(v0);
gc();
