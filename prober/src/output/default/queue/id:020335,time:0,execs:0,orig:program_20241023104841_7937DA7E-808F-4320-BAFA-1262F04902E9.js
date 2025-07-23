const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8() {
        let v10 = "object";
        let v11 = v10++;
        ++v11;
        return arguments;
    }
    f8();
}
v2.map(f3);
gc();
