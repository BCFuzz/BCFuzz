function f0(a1, a2) {
    return a2;
}
const v5 = [232.26622270846133,1.7976931348623157e+308];
function f6() {
    return arguments;
}
const v8 = f6(2, -2094405050n);
const v10 = [f0];
Reflect.apply(v5.splice, v8, v10);
gc();
