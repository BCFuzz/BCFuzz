class C1 {
    #d = undefined;
}
const v2 = new C1();
const o3 = {
};
o3.constructor.getOwnPropertySymbols(v2);
gc();
