const v2 = new Int8Array(14);
const v3 = [v2,v2];
const v4 = [Int8Array,Int8Array,Int8Array,Int8Array,Int8Array];
function f5() {
    return v2;
}
v4.constructor = f5;
for (let i = 0; i < 10; i++) {
    class C7 extends v4.constructor {
        4 = v3;
    }
    new C7();
}
gc();
