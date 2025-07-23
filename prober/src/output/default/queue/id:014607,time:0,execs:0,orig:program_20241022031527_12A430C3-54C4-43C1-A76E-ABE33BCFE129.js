const v1 = new Int32Array();
function f2() {
    return v1["values"]();
}
for (let i7 = 0, i8 = 10;
    (() => {
        Reflect[Symbol.iterator] = f2;
        return Reflect.construct(Int32Array, [Reflect]) < i8;
    })();
    ) {
    i8--;
}
gc();
