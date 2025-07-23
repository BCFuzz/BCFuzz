class C1 {
}
class C2 extends C1 {
}
function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
const o5 = {
};
o5.enumerable = 4294967297;
const v7 = new F3();
Reflect.defineProperty(v7, C2, o5);
gc();
