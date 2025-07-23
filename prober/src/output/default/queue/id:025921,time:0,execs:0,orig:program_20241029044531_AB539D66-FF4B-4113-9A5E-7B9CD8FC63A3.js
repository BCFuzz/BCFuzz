for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int32Array(681);
function f13(a14, a15, a16, a17) {
    function f18() {
        function f20() {
            return arguments;
        }
        function f21(a22) {
            function f23() {
                return a22;
            }
            return arguments;
        }
        f20.toString = f21;
        const v24 = f20.toString();
        v24.callee(v24)[0];
        return arguments;
    }
    f18();
    return 681;
}
v12.map(f13);
gc();
