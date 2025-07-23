function f1(a2) {
    const o3 = {
        __proto__: a2,
    };
    return o3;
}
const v5 = [f1(null)];
const v7 = [f1,[v5,v5,v5,v5,v5],v5];
try { v7.toLocaleString(); } catch (e) {}
gc();
