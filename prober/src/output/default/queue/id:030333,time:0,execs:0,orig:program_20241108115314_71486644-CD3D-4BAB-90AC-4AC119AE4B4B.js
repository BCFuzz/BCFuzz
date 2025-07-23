function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = new F0();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    a8.b = a8;
    a7.b = a7;
    this.d = v2;
    this.f = a8;
    this.g = a8;
}
new F5(v3, v2);
new F5(v4, v3);
new F5(v2, v3);
for (let [i24, i25] = (() => {
        for (let i15 = 6n, i16 = 10; i15 < i16; i16--) {
        }
        return [0, 2520];
    })();
    i25;
    i25--) {
}
for (let i34 = 265556202, i35 = 10; 8 < i35; i35--) {
}
gc();
