function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v5 = 0; v5 < 10; v5++) {
    for (let v6 = 0; v6 < 25; v6++) {
        v2.length = 2147483649n;
        new F3();
        v2["p" + v6] = v6;
    }
}
gc();
