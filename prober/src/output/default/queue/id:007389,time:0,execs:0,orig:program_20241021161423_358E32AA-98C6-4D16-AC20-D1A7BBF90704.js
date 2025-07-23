const v3 = new Int16Array(128);
function f4() {
    const o5 = {
        ...v3,
    };
    return o5;
}
for (let v6 = 0; v6 < 10; v6++) {
    class C7 extends f4 {
        129 = 783;
    }
    new C7();
}
gc();
