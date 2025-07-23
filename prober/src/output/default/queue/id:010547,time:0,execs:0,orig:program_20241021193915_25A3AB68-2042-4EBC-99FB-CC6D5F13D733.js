const v3 = new Int16Array(128);
function f4() {
    const o5 = {
        ...v3,
    };
    o5[33];
    o5[114] = o5;
    return Int16Array;
}
for (let v7 = 0; v7 < 10; v7++) {
    class C8 extends f4 {
        129 = 783;
    }
    new C8();
}
gc();
