class C0 {
}
const v1 = new C0();
function f2() {
    const v5 = new Int8Array();
    const t5 = createGlobalObject().Float16Array;
    new t5(v5);
    return v5;
}
v1.constructor = f2;
v1.constructor();
gc();
