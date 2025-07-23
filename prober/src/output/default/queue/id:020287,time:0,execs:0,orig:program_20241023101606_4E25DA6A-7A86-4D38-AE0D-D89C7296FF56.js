function f0(a1, a2) {
    return f0;
}
new Promise(f0);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
function f9(a10, a11) {
    return f0;
}
Reflect.construct(Promise, [f9], F5);
new Promise(f9);
gc();
