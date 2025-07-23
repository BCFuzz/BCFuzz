function f1(a2, a3) {
    return Uint32Array;
}
Reflect.construct(Uint32Array, [f1]).fill();
gc();
