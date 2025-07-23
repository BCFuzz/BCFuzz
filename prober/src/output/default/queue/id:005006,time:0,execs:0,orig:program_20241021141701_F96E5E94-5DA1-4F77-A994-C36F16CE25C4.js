class C2 {
}
class C3 extends C2 {
}
Object.defineProperty(C2, 2, { value: NaN });
const o4 = {
    ..."function",
};
o4[3];
for (let v6 = 0; v6 < 250; v6++) {
    v6++;
    v6--;
}
gc();
