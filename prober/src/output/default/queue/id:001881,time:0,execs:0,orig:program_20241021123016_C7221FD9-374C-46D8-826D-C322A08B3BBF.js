[1000000.0,-5.760042824029725,1000000000.0,-561274.46895252,-Infinity];
const v2 = new Int16Array();
function f3() {
    return v2;
}
class C4 {
}
class C5 extends C4 {
}
class C6 extends C4 {
    #m(a8, a9, a10, a11) {
    }
}
for (let v12 = 0; v12 < 250; v12++) {
    let v13;
    try { v13 = v12(); } catch (e) {}
    f3 == v13;
    v12++;
    v12--;
}
gc();
