function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = new F0();
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    a11.g = a11;
}
new F7(28529n, 28529n, v4);
new F7(F0, v2, v3);
new F7(-1792670909n, 28529n, v2);
for (let v15 = 0; v15 < 250; v15++) {
}
gc();
