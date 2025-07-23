function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F1(F1, F1, undefined);
v6[1748862600] = ("-13")[undefined];
function f9(a10, a11) {
    return a11;
}
Reflect.preventExtensions(v6);
v6[228004202] = Reflect[f9];
gc();
