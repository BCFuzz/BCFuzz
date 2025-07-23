function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v6 = [v2,Date(Date),v3];
const v7 = [v6,Date,v6,v2,v6];
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    (v7 + v7).replaceAll(a10);
}
new F8(v2);
gc();
