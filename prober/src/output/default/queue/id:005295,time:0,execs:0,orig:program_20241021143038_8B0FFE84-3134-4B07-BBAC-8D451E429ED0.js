function f0() {
    return f0;
}
class C1 extends f0 {
}
let v2 = new C1();
const v3 = [127,255,16,60779,7226,1217775477,257,-21099,4294967297,9007199254740991];
const v6 = new Int32Array(1000);
const v7 = v3.length;
({"buffer":v2,} = v6);
v6.lastIndexOf(v7);
gc();
