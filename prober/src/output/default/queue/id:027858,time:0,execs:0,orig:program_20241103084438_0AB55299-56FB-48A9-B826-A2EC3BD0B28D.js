const v1 = new Uint8Array();
const v2 = /(H[\011][lX[^123]+])/s;
function f3(a4, a5, a6) {
    const v7 = v1.byteLength;
    v2.test(v7);
    return v7;
}
const v11 = new Int16Array(3378);
const v12 = [-13,-25684,-2147483649,-4294967297];
const v14 = [f3];
Reflect.apply(v12.reduceRight, v11, v14);
for (let i19 = 10, i20 = 10; -13369 < i20; i20--) {
}
gc();
