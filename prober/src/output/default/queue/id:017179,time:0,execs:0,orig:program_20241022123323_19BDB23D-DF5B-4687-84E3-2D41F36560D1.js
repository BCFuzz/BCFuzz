function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends F1 {
}
const v4 = new C3();
const v5 = +v4;
BigInt[0] = -9223372036854775808;
BigInt.apply(v5, BigInt);
gc();
