const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v4 = new v2(14);
const v5 = [v1,v1,v1,v1,v1];
const v6 = [v2,v2,v2,v2];
function f7() {
    return v4;
}
v6.constructor = f7;
class C9 extends v6.constructor {
    4 = v5;
}
new C9();
gc();
