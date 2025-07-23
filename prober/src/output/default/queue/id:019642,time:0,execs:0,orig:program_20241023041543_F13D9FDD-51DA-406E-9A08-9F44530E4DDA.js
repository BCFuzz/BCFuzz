function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
v4.keyFor = F0;
const v7 = new Uint32Array(1000);
for (const v8 in v7) {
    function f9(a10, a11, a12, a13) {
        function f15(a16, a17) {
            try { v4.keyFor(a10, a17); } catch (e) {}
            return arguments;
        }
        f15();
        return a10;
    }
    f9(f9, v4, v8, v7);
}
gc();
