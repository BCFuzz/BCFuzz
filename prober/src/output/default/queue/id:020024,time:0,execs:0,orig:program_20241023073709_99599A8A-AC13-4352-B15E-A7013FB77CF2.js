function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4(a5, a6) {
    return a6;
}
Reflect.construct(Promise, [f4], F0);
new Promise(f4);
gc();
