const v2 = Array(10);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const o7 = {
        "has": Array,
    };
    const v9 = new Proxy(v2, o7);
    v9.concat();
}
const v11 = new F3(Array, F3);
new F3(v2, v11);
gc();
