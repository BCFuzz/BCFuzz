const v0 = /.I[\c!]/dis;
const v3 = new Int32Array(681);
function f4(a5, a6, a7, a8) {
    function F9() {
        if (!new.target) { throw 'must be called with new'; }
        function F11() {
            if (!new.target) { throw 'must be called with new'; }
            v0.test(this);
        }
        new F11();
    }
    new F9();
    return a5;
}
v3.map(f4);
gc();
