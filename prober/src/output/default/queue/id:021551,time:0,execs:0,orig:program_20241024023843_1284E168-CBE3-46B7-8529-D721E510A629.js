class C2 {
}
const v3 = new C2();
for (let v4 = 0; v4 < 25; v4++) {
    function f5() {
        return -250803968n;
    }
    const o10 = {
        toString(a7, a8) {
            a7.toString(v3, a8);
            a8.arguments = f5;
            return a7;
        },
    };
    o10.toString("iterator", -250803968n);
    o10.toString(o10, f5);
    o10.toString(o10, o10);
}
gc();
