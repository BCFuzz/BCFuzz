function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = Reflect.construct(URIError, [Reflect], F0);
v5.toLocaleString().search(v5);
gc();
