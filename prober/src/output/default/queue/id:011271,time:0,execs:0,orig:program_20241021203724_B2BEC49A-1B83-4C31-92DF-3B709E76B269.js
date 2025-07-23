let v0 = -5;
const v2 = new ArrayBuffer();
v2.transfer();
let v4 = 2;
for (let v5 = 0; v5 < 5; v5++) {
    ({"byteLength":v4,"resizable":v0,...v5} = v2);
}
gc();
