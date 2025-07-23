function f0(a1, a2) {
    arguments.callee += a2;
    return arguments;
}
const v4 = f0(f0);
v4[0] = v4;
gc();
