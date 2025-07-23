function f0(a1, a2) {
    return f0;
}
f0.name;
f0.prototype = f0;
gc();
