class C0 {
}
const v1 = [-9223372036854775807,9223372036854775807,1073741825,1000,-11];
function f2(a3, a4) {
    return v1;
}
function f5(a6, a7) {
    const t7 = createGlobalObject().Float16Array;
    const v11 = new t7(v1);
    v11.lastIndexOf(C0);
    return a6;
}
f2[Symbol.toPrimitive] = f5;
f2.hasOwnProperty(f2);
gc();
