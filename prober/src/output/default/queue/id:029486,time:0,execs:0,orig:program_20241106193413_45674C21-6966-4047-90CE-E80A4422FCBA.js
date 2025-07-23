for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = Array();
        const v10 = new Int8Array(4096);
        const o11 = {
            [v10]: v7,
        };
        o11.toJSON = this;
        JSON.stringify(o11);
    }
    const v14 = new F1();
    v14.constructor;
}
gc();
