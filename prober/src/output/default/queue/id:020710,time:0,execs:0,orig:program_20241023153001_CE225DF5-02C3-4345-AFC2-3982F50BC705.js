function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = [v2,v2,F0];
const v4 = [v3,v3,v3];
for (let v5 = 0; v5 < 10; v5++) {
    class C6 {
    }
    for (const v9 of v4.toString().link()) {
        v9 in C6;
    }
    for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
    }
}
gc();
