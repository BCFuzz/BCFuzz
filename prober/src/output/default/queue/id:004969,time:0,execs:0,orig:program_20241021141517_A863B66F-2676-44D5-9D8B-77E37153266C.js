function f0() {
    return f0;
}
let v1 = 1024;
v1++;
const v4 = new Uint16Array(v1);
v4["sort"](f0);
gc();
