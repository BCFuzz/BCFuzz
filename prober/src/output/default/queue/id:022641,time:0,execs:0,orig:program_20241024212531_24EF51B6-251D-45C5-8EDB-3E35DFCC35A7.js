const v0 = [];
const v2 = new Uint8Array();
const v3 = v2.buffer;
v3.transfer();
const v6 = [v3,v3];
const v8 = Reflect.apply(v0.entries, v2, v6);
try { v8.next(v2, Reflect); } catch (e) {}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
gc();
