const v1 = new Uint8Array();
function f2(a3, a4) {
    return 2147483648;
}
v1.valueOf = f2;
function f7() {
    Reflect.construct(Int16Array, [arguments]);
    return Int16Array;
}
f7(v1);
gc();
