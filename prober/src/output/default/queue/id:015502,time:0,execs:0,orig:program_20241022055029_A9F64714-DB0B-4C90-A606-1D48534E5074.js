function f2(a3) {
    return a3 >> Float64Array;
}
Set.toString = f2;
const v5 = -Set;
const v8 = new Uint16Array(255);
v8["includes"](v5);
gc();
