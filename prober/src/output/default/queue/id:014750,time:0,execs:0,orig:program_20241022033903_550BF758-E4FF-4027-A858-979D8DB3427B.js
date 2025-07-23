const v0 = [];
const v3 = new Int32Array(209);
const v4 = [v0];
function f5() {
    const o6 = {
    };
    const v7 = o6.constructor;
    v7.assign(o6, v0);
    class C9 extends v7 {
    }
    C9.getOwnPropertyNames(Int32Array);
    return v0;
}
const v12 = [f5];
Reflect.apply(v4.toSorted, v3, v12);
gc();
