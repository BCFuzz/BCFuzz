const v1 = Date();
function f2(a3, a4) {
    const o5 = {
        __proto__: a4,
    };
    return o5;
}
const v6 = f2(v1, f2);
const v8 = createGlobalObject();
try { v8.encodeURI(v6); } catch (e) {}
gc();
