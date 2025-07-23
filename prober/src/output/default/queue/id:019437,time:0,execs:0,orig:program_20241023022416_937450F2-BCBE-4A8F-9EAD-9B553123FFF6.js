const v0 = [44232,-256,2909,33526,1073741824,-1549799911,1024,3,-7,-56231];
function f1(a2) {
    const o7 = {
        __proto__: a2,
        get e() {
            for (const v4 of v0) {
                super[v4 >> v4];
            }
            return a2;
        },
    };
    return o7;
}
const v8 = f1(v0);
const v9 = f1();
const v10 = f1();
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    a15.e;
}
new F11(v9, v10, v8);
gc();
