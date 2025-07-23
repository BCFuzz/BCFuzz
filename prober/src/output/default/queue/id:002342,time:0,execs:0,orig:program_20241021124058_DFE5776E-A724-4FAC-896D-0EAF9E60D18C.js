function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 4;
}
const v3 = new F0();
const v4 = new F0();
v4.c = v4;
function f5() {
    return F0;
}
const v6 = /2/mgisu;
const v7 = /a/dgu;
const v8 = /[IXH]/mygu;
v8.ignoreCase;
const v10 = [f5,v8];
v10[2] = v10;
[v6];
[v7,v3];
let v13 = 0;
do {
    v13++;
} while ((() => {
        let v15 = 6;
        v15--;
        return v13 < v15;
    })())
const v18 = [8,2147483647,-10,6,-1,-65536,1073741824,0];
class C20 {
    static #b;
    static p(a22) {
    }
}
const v23 = new C20();
const v24 = new C20("split");
try { v24.constructor(C20, v18); } catch (e) {}
class C26 extends C20 {
    static valueOf(a28, a29, a30, a31) {
    }
}
new C26();
class C33 extends C20 {
    #m(a35, a36, a37, a38) {
    }
}
const v39 = new C33();
const t45 = v39.constructor;
new t45();
C33 = v23;
for (let v42 = 0; v42 < 500; v42++) {
    try { v42(); } catch (e) {}
    v42++;
    v42--;
}
gc();
