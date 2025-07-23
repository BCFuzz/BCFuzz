const v0 = /c/vi;
const o1 = {
};
const v2 = o1.constructor;
v2.freeze(v0);
class C4 extends v2 {
}
C4.isSealed(v0);
gc();
