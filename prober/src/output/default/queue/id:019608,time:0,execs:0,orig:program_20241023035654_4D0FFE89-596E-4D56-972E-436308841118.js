const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    const v10 = /\p{gc=Nd}/yisu.exec("2147483649");
    function f11() {
        return a7;
    }
    Object.defineProperty(v10, "valueOf", { enumerable: true, value: f11 });
    return f11;
}
v2.map(f3);
gc();
