function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = new F0();
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a8.g = a8;
    this.g = a9;
    this.d = v2;
    this.h = 179398690;
}
new F6(v2);
new F6(v3);
new F6(v4);
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
    for (let v24 = 0; v24 < 25; v24++) {
    }
}
gc();
