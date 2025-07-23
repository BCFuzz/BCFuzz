const v1 = new Set();
const v2 = [Set,Set];
function f3(a4, a5) {
    const v6 = a5 > a5;
    const v7 = delete v2.length;
    try { new a4(Set, v7, ...v1, v6, ...v7); } catch (e) {}
    return v1;
}
class C9 {
}
const v10 = new C9();
v10.valueOf = f3;
class C11 {
}
const v12 = new C11();
v12.__proto__ = v10;
for (let v13 = 0; v13 < 5; v13++) {
    v12["valueOf"]();
}
gc();
