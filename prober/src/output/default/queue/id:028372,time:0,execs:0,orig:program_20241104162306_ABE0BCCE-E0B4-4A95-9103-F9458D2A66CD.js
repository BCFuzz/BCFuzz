const v1 = new Int16Array();
function f2(a3) {
    const v6 = new Float64Array(198);
    function f7() {
        return delete v1[1691];
    }
    v6.valueOf = f7;
    return v6;
}
v1.constructor = f2;
const v9 = v1.constructor;
const v11 = createGlobalObject();
const v12 = v11.Float16Array;
const v13 = v9(v12, v9, f2, v11);
v13[60] = v13;
const v15 = new v12(v13.buffer);
v15.set(v13);
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
}
for (let i29 = 0, i30 = 10; i30--, i29 < i30;) {
}
for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
}
gc();
