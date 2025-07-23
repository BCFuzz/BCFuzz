const v1 = new Int32Array();
const v3 = new Int32Array(209);
function f4() {
    const v5 = (a6, a7) => {
        return v3;
    };
    v5.bind();
    return v5;
}
const v10 = [f4];
Reflect.apply(v1.toSorted, v3, v10);
gc();
