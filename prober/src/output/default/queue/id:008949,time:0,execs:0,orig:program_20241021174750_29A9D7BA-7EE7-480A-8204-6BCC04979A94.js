const v1 = ReferenceError(ReferenceError);
const v2 = v1.toString;
const v4 = new Int32Array(v1, v2, v2);
const v6 = new Int32Array(209);
function f7() {
    Number.isNaN(Math.sqrt(v2));
    return v4;
}
const v13 = [f7];
Reflect.apply(v4.toSorted, v6, v13);
gc();
