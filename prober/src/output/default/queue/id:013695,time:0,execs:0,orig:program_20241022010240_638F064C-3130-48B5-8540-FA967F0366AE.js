const v0 = [-8,4294967297,129];
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
const v10 = new F5("undefined", v0, v0);
const v11 = v10.length;
const v13 = `
    try { ("-13").padEnd(v0); } catch (e) {}
    let v16;
    try { v16 = ("-13").small(); } catch (e) {}
    const v17 = v16?.substring;
    try { v17(F5, v16); } catch (e) {}
    const v19 = ("-13")[undefined];
    const o20 = {
        "maxByteLength": -1,
        __proto__: v11,
        1073741825: v11,
        ...undefined,
    };
    o20[1073741825];
    o20.g = o20;
    const v22 = o20[1073741825];
    o20[1073741825] = o20;
    o20.h = o20;
    o20.h = v19;
    const o23 = {
        "h": v19,
        "e": v19,
        "a": "undefined",
        "b": "-13",
        __proto__: undefined,
    };
    o23.g = o23;
    o23.a = o23;
    this.parseInt();
    function f26(a27, a28) {
        const t36 = a28.constructor;
        t36(a28, v19, v22);
    }
`;
eval(v13);
gc();
