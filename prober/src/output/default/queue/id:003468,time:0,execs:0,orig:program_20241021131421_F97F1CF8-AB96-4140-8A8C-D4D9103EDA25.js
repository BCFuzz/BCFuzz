function f1() {
    return Int16Array;
}
function f2() {
    return Int16Array;
}
const v5 = new Uint16Array(1024);
v5["sort"](f2);
this.constructor.freeze(this);
gc();
