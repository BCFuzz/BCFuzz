const v1 = ["b","b","b","b","b"];
function f2(a3, a4) {
    const v6 = [a4,a4,a4];
    return Reflect.apply(("b").matchAll, v1, v6);
}
const v9 = /9(?!(a))\1(?:ab){4,7}?/su;
v9.toString = f2;
const v10 = v9.toString();
const o11 = {
};
o11.constructor.defineProperties(v9, v10);
gc();
