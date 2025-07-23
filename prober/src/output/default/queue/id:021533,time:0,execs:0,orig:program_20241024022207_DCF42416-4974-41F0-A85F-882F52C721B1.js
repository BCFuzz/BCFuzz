const v2 = new Uint32Array(1000);
for (const v3 in v2) {
    function f4(a5, a6, a7, a8) {
        function f10(a11, a12) {
            a11.toString(a6, 1000, a11);
            return arguments;
        }
        f10(arguments);
        return v3;
    }
    f4(v3, v2, v2, v2);
}
gc();
