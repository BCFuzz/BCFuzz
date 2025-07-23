class C0 {
}
const v1 = new C0();
function f2(a3) {
    const o4 = {
    };
    o4[127] = o4;
    return o4;
}
const v5 = f2();
const t10 = v5[127];
t10[2013] = v1;
for (let v7 = 0; v7 < 500; v7++) {
    for (let v8 = 0; v8 < 5; v8++) {
        v5[14] = v7;
    }
}
gc();
