class C0 {
}
const v1 = new C0();
const v2 = new C0();
function f3(a4) {
    const o5 = {
    };
    o5[14] = v1;
    o5[127] = o5;
    return o5;
}
const v6 = f3();
const t12 = v6[127];
t12[2013] = v2;
for (let v8 = 0; v8 < 500; v8++) {
    for (let v9 = 0; v9 < 5; v9++) {
        v6[14] = v8;
    }
}
gc();
