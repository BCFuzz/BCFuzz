const v2 = new Uint8Array(2215);
class C4 {
}
class C5 extends C4 {
    [v2] = Uint16Array;
}
const v6 = new C5();
const t7 = v6.constructor;
new t7();
for (let v9 = 0; v9 < 250; v9++) {
}
gc();
