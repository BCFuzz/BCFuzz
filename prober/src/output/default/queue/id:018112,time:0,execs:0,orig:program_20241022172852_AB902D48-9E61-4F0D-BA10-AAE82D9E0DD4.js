const v1 = `
    const v2 = [v1];
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        a6.search(v2);
    }
    const v8 = new F3(v1, v1);
    const v9 = /\u{12345}/myvis;
    function f10(a11) {
        return v8;
    }
    v9.toString = f10;
    v9.toString();
`;
const t14 = eval(v1).constructor;
new t14("7", "7");
gc();
