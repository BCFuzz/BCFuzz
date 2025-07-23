for (let v0 = 0; v0 < 50; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = ("GaMS").fontcolor();
        const v8 = /([\xe2\x81\xa3])/vis;
        v8.lastIndex = v8;
        ("GaMS")["replace"](v8, v7);
    }
    const v11 = new F1(v0, v0, v0);
    const v12 = v11.constructor;
    new v12();
    const v14 = v11.constructor;
    new v14(v14, v12);
}
gc();
