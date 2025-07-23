function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v8 = [v3,[v3],v5,v4];
class C10 extends F0 {
    static [v8] = v4;
}
gc();
