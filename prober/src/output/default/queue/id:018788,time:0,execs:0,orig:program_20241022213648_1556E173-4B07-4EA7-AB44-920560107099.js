for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    function F11() {
        if (!new.target) { throw 'must be called with new'; }
        function f13(a14, a15, a16, a17) {
            return "c" in this;
        }
        f13(i3, "c", i2, i3);
    }
    new F11();
}
gc();
