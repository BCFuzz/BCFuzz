const v2 = ReferenceError().toString;
const v4 = new Int32Array();
const v6 = new Int32Array(209);
function f7() {
    Math.sqrt(v2);
    return ReferenceError;
}
const v11 = [f7];
Reflect.apply(v4.toSorted, v6, v11);
gc();
