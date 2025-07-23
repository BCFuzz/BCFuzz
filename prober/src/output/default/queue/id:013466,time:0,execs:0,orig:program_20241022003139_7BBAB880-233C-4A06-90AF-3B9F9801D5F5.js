function f0() {
    for (let v1 = 0; v1 < 5; v1++) {
        v1 **= v1;
    }
}
const v4 = new Uint16Array(1000);
v4["some"](f0);
gc();
