function f0() {
    const v1 = `
        var a = Symbol;
    `;
    eval(v1);
    return f0;
}
f0();
gc();
