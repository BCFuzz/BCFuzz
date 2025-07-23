function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = /(?!(a))\1*/iu;
v4.__proto__ = v3;
v4 / v2;
gc();
