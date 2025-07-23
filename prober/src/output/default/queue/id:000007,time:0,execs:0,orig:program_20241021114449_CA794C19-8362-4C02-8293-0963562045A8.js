new Int16Array(128);
new Uint8ClampedArray(3325);
new Float64Array(64);
new BigUint64Array(968);
function f15() {
    function F17(a19, a20, a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = arguments;
    }
    new F17(1024, 128, 128, 1024);
    new F17(64, 968, 64, 64);
}
f15(128, Int16Array, Uint32Array);
gc();
