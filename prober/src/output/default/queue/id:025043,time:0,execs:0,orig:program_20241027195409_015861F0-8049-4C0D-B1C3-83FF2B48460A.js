function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 10; v2++) {
        function f3(a4, a5) {
            Object.getPrototypeOf(4294967295);
            return f3;
        }
        f3();
    }
}
new F0();
gc();
