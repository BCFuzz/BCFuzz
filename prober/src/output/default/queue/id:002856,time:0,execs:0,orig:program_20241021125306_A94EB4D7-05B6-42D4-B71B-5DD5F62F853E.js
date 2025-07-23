const v2 = new Uint8Array(1024);
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v2;
}
let v10 = /[x](?:a*)*/dgsu;
--v10;
const v13 = v10 + -1000000.0;
v13 / v13;
const v16 = new Uint8Array(1024);
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v16;
}
const v23 = new F17();
v23.d;
const v25 = new F3();
for (const v27 of v25.d) {
}
gc();
