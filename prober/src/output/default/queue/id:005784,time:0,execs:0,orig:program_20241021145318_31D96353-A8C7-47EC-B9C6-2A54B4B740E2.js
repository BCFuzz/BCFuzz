function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
Reflect.construct(URIError, [URIError], F0);
gc();
