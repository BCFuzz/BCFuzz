function f1() {
    return -5;
}
const v4 = new Uint16Array(1024);
v4["sort"](f1);
gc();
