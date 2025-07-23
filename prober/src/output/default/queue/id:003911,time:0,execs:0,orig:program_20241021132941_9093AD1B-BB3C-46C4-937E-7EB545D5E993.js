function f0() {
    return f0;
}
const v2 = new Date();
v2.valueOf = f0;
v2.toJSON();
gc();
