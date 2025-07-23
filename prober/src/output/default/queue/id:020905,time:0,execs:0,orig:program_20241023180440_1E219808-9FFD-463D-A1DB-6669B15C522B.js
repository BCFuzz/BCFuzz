function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2();
v6[6] = 1000000000.0;
const v7 = new F2();
v6[1000.0] = v7 instanceof F2;
function f9(a10, a11, a12, a13) {
    try { a10(); } catch (e) {}
    for (let i = 0; i < 5; i++) {
        v6[6];
    }
    for (const v16 in v6) {
    }
    return f9;
}
for (let v17 = 0; v17 < 50; v17++) {
    f9(f9);
}
gc();
