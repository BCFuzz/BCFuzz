function f2() {
    return f2;
}
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -1024;
    this.g = 128;
}
const v6 = new F3(-1024);
const v7 = new F3(v6);
new Float32Array(128);
new Float64Array();
const v14 = new Uint8Array(567);
const o15 = {
    __proto__: v7,
};
for (const v16 of v14) {
    new Array(512);
    for (let v20 = 0; v20 < 10; v20++) {
        v14["p" + v20] = v20;
    }
}
gc();
