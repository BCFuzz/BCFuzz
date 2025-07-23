function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
new F0(F0, F0);
const o6 = {
    "a": -1e-15,
};
for (let v7 = 0; v7 < 25; v7++) {
    const v8 = o6.a;
    for (let i = 0; i < 10; i++) {
    }
    v8 >>> v8;
    v8.toString();
}
gc();
