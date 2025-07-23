const v3 = new Uint8Array(1024);
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v3;
}
let v10 = /[x](?:a*)*/dgsu;
function f11(a12, a13) {
    return true;
}
Object.defineProperty(v10, "valueOf", { value: f11 });
--v10;
const v16 = v10 + -1000000.0;
v16 % v16;
const v18 = new F4(-1000000.0, 1024, F4, -1000000.0);
for (const v20 of v18.d) {
}
gc();
