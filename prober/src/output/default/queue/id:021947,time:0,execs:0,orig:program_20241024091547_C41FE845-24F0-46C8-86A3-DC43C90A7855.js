for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v12 = createGlobalObject().Float16Array;
const v15 = new SharedArrayBuffer(1000);
const v16 = new v12(v15);
const o17 = {
};
const v18 = o17.constructor;
try { v18.freeze(v16); } catch (e) {}
gc();
