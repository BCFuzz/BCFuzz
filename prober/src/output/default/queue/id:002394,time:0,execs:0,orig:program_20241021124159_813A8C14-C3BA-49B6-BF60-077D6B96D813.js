function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f4() {
    Reflect.construct(Int16Array, [arguments]).toSorted();
    return F0;
}
f4(v2);
gc();
