function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
const t5 = this.constructor;
t5(-1103857354).toExponential(C2);
gc();
