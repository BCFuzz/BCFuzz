class C0 {
}
const v1 = new C0();
function f3() {
    const v4 = [4294967297,268435439,1540,0,11,-818005016,-728970665,-28748,1,31782];
    v1[v4] &= -1000000.0;
    return v4;
}
const v7 = new Uint16Array(512);
v7.filter(f3);
gc();
