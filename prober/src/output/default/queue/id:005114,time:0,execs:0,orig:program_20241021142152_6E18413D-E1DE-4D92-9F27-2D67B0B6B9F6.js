function f0() {
    return f0;
}
const v1 = f0.bind();
v1.name;
v1.length = v1;
gc();
