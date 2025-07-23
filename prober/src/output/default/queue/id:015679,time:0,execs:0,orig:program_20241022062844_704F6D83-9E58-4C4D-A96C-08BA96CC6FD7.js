function f1() {
    return "-10774";
}
function f2() {
    return f2;
}
f2.valueOf = f1;
const v4 = new Int32Array();
const v6 = new Int32Array(209);
function f7() {
    return Math.fround(f2 ** f2);
}
const v12 = [f7];
Reflect.apply(v4.toSorted, v6, v12);
gc();
