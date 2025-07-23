const v1 = createGlobalObject();
const t1 = v1.Float16Array;
const v4 = new t1(14);
const v5 = [v1,v1,v1,v1,v1];
const v6 = [14,14,14,14];
function f7() {
    return v4;
}
v6.constructor = f7;
const v8 = v6.constructor;
v8().subarray();
class C11 extends v8 {
    4 = v5;
}
new C11();
gc();
