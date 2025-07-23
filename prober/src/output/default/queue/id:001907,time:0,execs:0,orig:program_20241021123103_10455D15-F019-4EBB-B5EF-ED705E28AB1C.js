class C0 {
}
function f1() {
    const v3 = new Uint16Array();
    g = v3;
}
new f1();
C0[Symbol.toPrimitive] = f1;
class C7 extends C0 {
    [C0];
}
for (let v8 = 0; v8 < 10; v8++) {
    function f9(a10, a11) {
        return a10 | a10;
    }
    f9();
}
gc();
