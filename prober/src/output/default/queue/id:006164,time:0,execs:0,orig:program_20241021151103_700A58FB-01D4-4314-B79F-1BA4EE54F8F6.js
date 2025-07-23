function f0() {
    return f0;
}
function f1() {
    const v3 = new WeakSet();
    ({"h":f0,} = v3);
    eval();
    return f0;
}
f1();
gc();
