const v0 = /Ya{1,2}?(ql[x])/mvgi;
class C1 {
}
const v2 = new C1();
const v3 = v2[6];
for (let i = 0; i < 10; i++) {
    v0.compile(v3);
    for (let v5 = 0; v5 < 25; v5++) {
    }
    v0.exec(v3);
}
gc();
