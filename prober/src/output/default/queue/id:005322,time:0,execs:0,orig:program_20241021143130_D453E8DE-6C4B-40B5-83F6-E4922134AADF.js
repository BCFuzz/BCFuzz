const v1 = new Int16Array();
function f2() {
    return Int16Array;
}
v1.h = f2;
v1.slice();
gc();
