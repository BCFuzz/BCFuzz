for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
function F11() {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
    v13.set = createGlobalObject;
    function f14(a15, a16) {
        Reflect.defineProperty(this, a15, v13);
        return createGlobalObject;
    }
    f14.call();
}
new F11();
gc();
