function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
}
const v7 = new F3("growable", "-65536");
const v8 = new F3("__proto__", "-65536");
const v9 = new F3("__proto__", "growable");
function f13(a14, a15) {
    const o29 = {
        [a14]: 3.0,
        "b": v8,
        "a": a14,
        "e": v7,
        "c": v9,
        "d": a14,
        ..."growable",
        get f() {
            const v17 = delete a14?.b;
            const v20 = new Int16Array();
            try { v20.sort(129); } catch (e) {}
            let v22 = 0;
            let v23 = v22++;
            v23--;
            try { new v17(v17, ..."__proto__", v17, this); } catch (e) {}
            gc();
            !"-65536";
            return "growable";
        },
    };
    return o29;
}
f13(v9, "growable");
f13(v7, v9);
f13(v9, v7);
function f33() {
    return f33;
}
f33();
4096 in [-4096,2147483648,3,536870887,-336478761,6,-1338899330,536870887,3];
function F38(a40, a41, a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
}
new F38(F38, 4096);
class C45 {
}
for (let v46 = 0; v46 < 250; v46++) {
    function f48(a49, a50, a51) {
        arguments.length;
        Symbol.iterator.description;
        Symbol.for();
        return a49;
    }
    f48();
}
class C60 extends C45 {
}
for (let v61 = 0; v61 < 250; v61++) {
    v61++;
    v61--;
}
gc();
