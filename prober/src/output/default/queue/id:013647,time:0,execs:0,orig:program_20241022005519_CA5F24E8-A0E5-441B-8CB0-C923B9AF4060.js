class C0 {
}
class C1 extends C0 {
}
const v2 = new C1();
const v4 = new C1();
const o6 = {
};
const v8 = new Proxy(v4, o6);
for (let v10 = 0; v10 < 5; v10++) {
    v2["p"] = v8;
    gc();
}
gc();
