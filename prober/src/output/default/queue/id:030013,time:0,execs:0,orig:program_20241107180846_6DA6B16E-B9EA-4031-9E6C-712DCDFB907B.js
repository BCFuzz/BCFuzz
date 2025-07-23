const v2 = new Int32Array(625);
let v4 = 2;
v4--;
const v7 = new Uint32Array(681);
function f8(a9, a10, a11, a12) {
    function f13() {
        v2[v4] &= arguments.length;
        return arguments;
    }
    f13(f13);
}
v7.map(f8);
gc();
