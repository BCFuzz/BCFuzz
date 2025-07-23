const v0 = /a+?a$[\0]/mdu;
function f1(a2, a3) {
    a2.unicode;
    const o5 = {
        __proto__: a2,
    };
    o5.constructor = f1;
    const v6 = o5.constructor;
    try { v6(o5); } catch (e) {}
    return a3;
}
f1(v0);
gc();
