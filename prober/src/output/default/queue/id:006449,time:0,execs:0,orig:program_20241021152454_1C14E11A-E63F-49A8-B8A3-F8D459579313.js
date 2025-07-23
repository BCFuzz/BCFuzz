function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = [/a/dgu,v2];
class C5 {
}
try { C5.constructor(v4); } catch (e) {}
gc();
