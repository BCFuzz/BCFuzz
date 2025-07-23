class C0 {
    #c;
}
const v1 = new C0();
const v2 = v1.constructor;
new v2(v1, v1, v2, v1, v2);
const v4 = new C0();
const t7 = v4.constructor;
new t7(v1);
new C0();
class C8 extends C0 {
}
const v9 = new C8();
const t13 = v9.constructor;
new t13();
const v12 = new C8();
const t16 = v12.constructor;
new t16();
new C8();
let v16 = 9;
v16--;
function f19(a20, a21, a22) {
    return a21;
}
("toString")["lastIndexOf"](f19, v16);
gc();
