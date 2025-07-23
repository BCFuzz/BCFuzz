const v1 = new Date();
function f2(a3, a4) {
    const o5 = {
        __proto__: v1,
    };
    o5.getUTCMilliseconds();
    return v1;
}
try { f2(); } catch (e) {}
gc();
