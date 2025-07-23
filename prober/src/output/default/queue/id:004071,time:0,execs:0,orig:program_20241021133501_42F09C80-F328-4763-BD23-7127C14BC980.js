function f1() {
    return f1;
}
new Float32Array(Reflect.construct(Array, [Array,Array], f1));
gc();
