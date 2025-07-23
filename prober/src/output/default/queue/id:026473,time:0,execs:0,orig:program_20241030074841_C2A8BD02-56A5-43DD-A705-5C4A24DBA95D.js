const v1 = [Uint8Array,Uint8Array,Uint8Array,Uint8Array];
function f2() {
    return f2;
}
class C3 extends f2 {
}
const v5 = new C3();
const v8 = new Int32Array(681);
function f9(a10, a11, a12, a13) {
    let v14 = 0;
    for (let i = 0; i < 5; i++) {
        v14++;
    }
    for (let i19 = 0, i20 = 10; i19 < i20; i19++, i20--) {
        ({"PI":a10,"a":i19,"b":v14,} = Math);
        const v28 = [Uint8Array,a11,f9];
        [v1,a11,v28,v5];
        [v28];
    }
    return eval(v14);
}
v8.map(f9);
gc();
