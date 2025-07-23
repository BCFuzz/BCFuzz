function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a4;
    for (let i = 0; i < 10; i++) {
        delete this.h;
    }
}
new F1(2659, 2659);
for (let i9 = 10, i10 = 10; -13369 !== i10; i10--) {
}
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
}
const o27 = {
    "maxByteLength": 2659,
};
gc();
