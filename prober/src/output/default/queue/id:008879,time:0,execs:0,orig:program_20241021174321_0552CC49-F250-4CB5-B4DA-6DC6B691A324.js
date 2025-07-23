function f0() {
    return f0;
}
const v2 = this.constructor;
v2.assign(v2, this);
gc();
