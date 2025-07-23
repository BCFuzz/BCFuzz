const v1 = /5a\W/mvg;
const v2 = /Mx/dgu;
v1.compile(512n);
function f4() {
    return v1;
}
function f5(a6, a7) {
}
f4[Symbol.toPrimitive] = f5;
new Date([f4,v1,v2]);
gc();
