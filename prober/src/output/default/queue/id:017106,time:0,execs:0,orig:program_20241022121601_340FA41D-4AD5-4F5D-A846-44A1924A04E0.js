const t0 = ("-789426228").constructor;
const v2 = new t0();
function f3(a4, a5) {
    Reflect.preventExtensions(v2);
}
v2[Symbol.toPrimitive] = f3;
v2.match(Symbol, v2, v2);
gc();
