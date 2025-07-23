function f0() {
    this.h = true;
    delete this.h;
    return this;
}
f0();
f0();
for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
}
gc();
