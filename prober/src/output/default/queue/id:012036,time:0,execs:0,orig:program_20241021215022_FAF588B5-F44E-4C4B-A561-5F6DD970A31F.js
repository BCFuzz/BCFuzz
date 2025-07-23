function f1() {
    return f1;
}
const v3 = new Date();
v3.setFullYear(103);
v3.valueOf = f1;
v3.toJSON();
gc();
