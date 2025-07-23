function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
Reflect.construct(Boolean, [Reflect], F0).toLocaleString();
gc();
