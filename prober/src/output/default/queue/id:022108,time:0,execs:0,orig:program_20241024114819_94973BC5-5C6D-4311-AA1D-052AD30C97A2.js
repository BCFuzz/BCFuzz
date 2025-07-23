const v2 = new Uint16Array();
function f3(a4) {
    const v6 = ("matchAll").toLocaleLowerCase();
    const o7 = {
    };
    const v9 = new Proxy(Uint16Array, o7);
    new v9(8);
    const v11 = v6.constructor;
    try { v11(v2); } catch (e) {}
    return "matchAll";
}
v2.toString = f3;
("f").search(v2);
gc();
