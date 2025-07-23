let v0 = 268435440;
const v3 = `
    Reflect[Reflect];
    v0 = 5;
    const v6 = [v3];
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        a10.search(v6);
    }
    const v12 = new F7(v3, v3);
    const v13 = /\u{12345}/myvis;
    function f14(a15) {
        return v12;
    }
    v13.toString = f14;
    v13.toString(v3, v0);
`;
const t17 = eval(v3).constructor;
new t17("7", "7");
gc();
