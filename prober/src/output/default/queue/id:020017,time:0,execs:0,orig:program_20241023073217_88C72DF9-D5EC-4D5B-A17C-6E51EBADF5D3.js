const v2 = `
    Reflect.construct(Float64Array, [v2,v2,v2]);
    const v6 = [v2];
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        a10.search(v6);
    }
    const v12 = new F7(v2, v2);
    const v13 = /\u{12345}/myvis;
    function f14(a15) {
        return v12;
    }
    v13.toString = f14;
    v13.toString("7", v12, v6, v2, "7");
`;
const t15 = eval(v2).constructor;
new t15("7", "7");
gc();
