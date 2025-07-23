function f0(a1, a2, a3) {
    Object.defineProperty(arguments, "length", { value: a2 });
    return f0;
}
f0(f0, f0, f0);
gc();
