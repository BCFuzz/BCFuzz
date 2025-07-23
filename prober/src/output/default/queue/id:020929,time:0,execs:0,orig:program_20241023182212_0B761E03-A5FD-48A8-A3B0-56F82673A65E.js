function f1() {
    return Reflect.construct(Int16Array, arguments);
}
f1();
gc();
