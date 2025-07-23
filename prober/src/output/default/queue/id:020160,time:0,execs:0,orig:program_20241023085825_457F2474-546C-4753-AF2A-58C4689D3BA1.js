function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5, a6) {
        super();
        const t6 = ([1000000000.0,5.0,1.7976931348623157e+308,1.510858453666195,-1e-15,929136.9843717425,0.5248786080243406,-9.524936997499932,0.3748531703597733]).__proto__;
        t6[2] = 2;
    }
}
new C1();
const v13 = new Int32Array(209);
const v14 = [v13,v13,v13];
function f15() {
    for (let i18 = -3, i19 = 10; i18 < i19; i19--) {
    }
    const v30 = Array();
    v30[484] = -1.120873378432005e+308;
    v30.splice(13, 1);
    return v13;
}
const v33 = [f15];
Reflect.apply(v14.toSorted, v13, v33);
gc();
