function f0() {
    const v1 = f0.arguments;
    const o2 = {
        ...v1,
    };
    return f0;
}
f0();
gc();
