const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    function f8() {
        const v10 = /u?/y;
        const v12 = [];
        Reflect.ownKeys(Reflect.apply(v10.compile, v10, v12));
        return arguments;
    }
    f8();
}
v2.map(f3);
gc();
