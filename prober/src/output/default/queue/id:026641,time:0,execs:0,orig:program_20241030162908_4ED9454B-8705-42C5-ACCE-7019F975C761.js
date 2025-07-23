function f1() {
    return 64;
}
function f2(a3, a4) {
    const o5 = {
        __proto__: a4,
    };
    return o5;
}
const v6 = f2(f1, 64);
const v7 = [64,64,v6,f1,v6];
try { v7.sort(f2); } catch (e) {}
gc();
