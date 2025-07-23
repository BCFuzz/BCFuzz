function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
Reflect.construct(URIError, [F0,F0,F0,F0,F0], F0).toLocaleString();
gc();
