SharedArrayBuffer[0] = SharedArrayBuffer;
class C1 {
}
class C2 extends C1 {
}
class C3 extends C1 {
}
for (let v4 = 0; v4 < 250; v4++) {
    v4++;
    v4--;
}
gc();
