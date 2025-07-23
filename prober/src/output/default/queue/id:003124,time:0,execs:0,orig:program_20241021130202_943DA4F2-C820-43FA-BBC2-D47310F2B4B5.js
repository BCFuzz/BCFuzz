const v1 = new WeakSet();
function f3(a4, a5) {
    const t2 = a4.constructor;
    t2();
    return "has";
}
f3.name.replace(v1);
f3("has");
gc();
