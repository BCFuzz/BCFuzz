for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v13 = [SharedArrayBuffer];
const v14 = Reflect.construct(ArrayBuffer, v13, SharedArrayBuffer);
try { v14.slice(v13); } catch (e) {}
gc();
