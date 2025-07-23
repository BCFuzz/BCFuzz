const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8(a9, a10, a11, a12) {
        function F13(a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F13();
        return a12;
    }
    f8(f3, 681, f3, v2);
    return a4;
}
v2.map(f3);
gc();
