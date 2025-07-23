function f0() {
    this.h = true;
    delete this.h;
    return this;
}
const v4 = f0();
for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
    gc();
    for (let v17 = 0; v17 < 5; v17++) {
        v4["p" + v17] = v17;
    }
}
gc();
