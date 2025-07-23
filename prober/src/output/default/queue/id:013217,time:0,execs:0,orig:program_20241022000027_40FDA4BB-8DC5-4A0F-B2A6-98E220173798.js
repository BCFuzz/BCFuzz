function f0(a1, a2) {
    arguments.callee += a2;
    for (const v4 in arguments) {
    }
    return a1;
}
f0(0.0);
gc();
