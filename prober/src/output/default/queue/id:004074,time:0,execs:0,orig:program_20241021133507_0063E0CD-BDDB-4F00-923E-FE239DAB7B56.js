function f1() {
    return Array;
}
Math.asin(Reflect.construct(Array, [f1,f1,f1], f1));
gc();
