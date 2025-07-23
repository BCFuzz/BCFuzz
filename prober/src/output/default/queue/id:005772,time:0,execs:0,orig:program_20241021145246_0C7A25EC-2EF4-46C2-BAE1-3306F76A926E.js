function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F1(-301743335, F1, F1);
const v7 = new F1();
function f8(a9, a10, a11, a12) {
    const o17 = {
        268435456: v6,
        [-301743335]: v7,
        p(a14, a15, a16) {
            return F1;
        },
    };
    try { o17.valueOf(); } catch (e) {}
    return a9;
}
const v19 = f8(v6, f8, F1, v7);
for (let v20 = 0; v20 < 10; v20++) {
    f8(v20, v7, v19, v20);
}
gc();
