let v0 = 1000.0;
const v1 = v0--;
function f2() {
    return v1;
}
const v5 = new Uint16Array(1024);
v5["sort"](f2);
gc();
