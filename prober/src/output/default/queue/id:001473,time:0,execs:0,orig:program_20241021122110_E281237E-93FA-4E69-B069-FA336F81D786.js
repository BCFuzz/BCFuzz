function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
Reflect.construct(Float64Array, [8], F0);
gc();
