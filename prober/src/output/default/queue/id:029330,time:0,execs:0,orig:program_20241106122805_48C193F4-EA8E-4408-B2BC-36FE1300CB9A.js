const v2 = new Uint8Array();
const v4 = new Int8Array(209);
let v5 = [v2];
function f6(a7, a8) {
    return 1024;
}
v5.valueOf = f6;
function f10() {
    return v5 << v5--;
}
const v14 = [f10];
Reflect.apply(v2.toSorted, v4, v14);
gc();
