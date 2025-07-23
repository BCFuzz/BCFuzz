function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f4() {
    const v7 = [arguments];
    Reflect.construct(Int16Array, v7).toSorted().with();
    return v7;
}
f4(v2);
gc();
