function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    static {
        /(x)(x)(x)\4S?/gi.compile(C2);
    }
}
gc();
