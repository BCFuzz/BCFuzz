for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    function F10() {
        if (!new.target) { throw 'must be called with new'; }
        function F12(a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
        }
        function f16(a17, a18, a19) {
            return i3;
        }
    }
    new F10();
}
gc();
