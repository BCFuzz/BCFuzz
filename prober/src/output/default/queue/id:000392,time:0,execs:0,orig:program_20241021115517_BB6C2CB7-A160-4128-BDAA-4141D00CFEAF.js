function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
class C3 extends F0 {
    constructor(a5) {
        super();
        Math.clz32(9223372036854775807);
        9223372036854775807 | v2;
    }
}
new C3(F0);
gc();
