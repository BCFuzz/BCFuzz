const v2 = new Uint8Array(Uint16Array);
const v4 = new Uint16Array(209);
let v5 = [Uint16Array,Uint16Array,Uint16Array,Uint16Array];
function f6(a7, a8) {
    return 1024;
}
v5.valueOf = f6;
function f10() {
    const v11 = v5--;
    return v11 << v11;
}
const v14 = [f10];
Reflect.apply(v2.toSorted, v4, v14);
gc();
