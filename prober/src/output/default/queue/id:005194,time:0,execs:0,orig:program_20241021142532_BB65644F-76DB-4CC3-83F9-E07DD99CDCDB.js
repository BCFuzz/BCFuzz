const v1 = new Int16Array();
function f2() {
    return Int16Array;
}
v1.constructor = f2;
v1.slice(v1, v1);
gc();
