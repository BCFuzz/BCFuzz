function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a10;
    this.description = "bigint";
}
const v11 = new F7("y3p", "y3p");
const v12 = new F7("bigint", F7, v11);
new F7("y3p", v12);
new Int16Array(5);
new Uint8ClampedArray(240);
new Uint8ClampedArray(8);
class C27 {
    constructor(a29, a30, a31, a32) {
        for (let i = 0; i < 10; i++) {
            createGlobalObject();
            new Uint8Array(a32);
        }
    }
}
const v36 = new C27(C27, 1000, 4294967296, false);
new C27(1000, -9007199254740991, v36, 4294967296);
gc();
