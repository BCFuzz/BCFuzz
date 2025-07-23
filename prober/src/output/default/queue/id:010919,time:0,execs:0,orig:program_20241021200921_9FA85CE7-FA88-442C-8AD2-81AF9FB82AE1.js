const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    let v8 = -a4;
    let v9 = v8--;
    v9--;
    function F11() {
        if (!new.target) { throw 'must be called with new'; }
        function f13(a14, a15, a16, a17) {
            function* f18(a19, a20, a21, a22) {
                return a19;
            }
            return f18(a15, f3, Int32Array, f3);
        }
        const v24 = f13(f13, a4, a5, a6);
        f13(v24, f13, v24, v24);
    }
    new F11();
    v9 - v9;
    return 681;
}
v2.map(f3);
gc();
