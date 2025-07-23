function f0() {
    return f0;
}
const v1 = /(a)(?:a?)*/vi;
function f2() {
    for (let v3 = 0; v3 < 25; v3++) {
        function f4() {
            v1.dotAll = 0;
            return f4;
        }
        class C6 extends f4 {
        }
        new C6();
    }
    return v1;
}
f2();
v1.valueOf = f0;
f2();
gc();
