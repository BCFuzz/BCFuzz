const v0 = [5.0,-4.0,-3.0,1.7976931348623157e+308,-1.7976931348623157e+308,0.28473291013372093,3.0];
const v2 = Array();
const v5 = new Uint32Array(v0);
for (const v6 in v5) {
    function f7(a8, a9, a10, a11) {
        try { a9(1000, 1000); } catch (e) {}
        a9.bind(a9, Array, v6);
        arguments[1] = arguments;
    }
    f7(v2, f7);
}
gc();
