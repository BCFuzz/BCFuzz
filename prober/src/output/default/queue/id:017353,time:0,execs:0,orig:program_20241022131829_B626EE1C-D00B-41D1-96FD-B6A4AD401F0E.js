function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends F0 {
}
class C4 {
    constructor() {
        super.d = this;
    }
}
const v6 = new C4();
const v7 = new C4();
for (let i11 = 0, i12 = 10 + 10; i12--, i11 < i12;) {
    for (let v19 = 0; v19 < 10; v19++) {
    }
    for (const v20 in v7) {
        try { i12(); } catch (e) {}
        v6[v20];
    }
}
for (let i25 = 10, i26 = 10; 6 < i26; i26--) {
}
gc();
