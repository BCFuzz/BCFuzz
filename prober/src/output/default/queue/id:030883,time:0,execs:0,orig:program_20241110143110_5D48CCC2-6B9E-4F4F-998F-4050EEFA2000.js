class C3 {
}
const v5 = [3.0,753164.010428637,1000000000.0,836.9348454972419,-Infinity,5.0,-995.2235779991463,1000000000.0,0.682988215353827];
function f7() {
    return 7;
}
class C8 extends f7 {
}
const v9 = new C3();
class C10 {
    constructor(a12, a13) {
        const v14 = this?.__defineSetter__;
        try { v14("undefined", C8); } catch (e) {}
        const v16 = a12?.call;
        try { v16(v9); } catch (e) {}
        let v18;
        try { v18 = this.getOwnPropertyDescriptors(); } catch (e) {}
        const v19 = v16?.substring;
        try { v19(v18, v5); } catch (e) {}
        const v21 = a12(24732, a12, "n");
        try { v21(v21); } catch (e) {}
        do {
            new Int32Array(16);
            new Int32Array(1024);
            new BigInt64Array(4096);
            -0;
        } while (0 < a13)
        `object${v21.name}-1126020689${v14}bigint${0}-44944${v14}el`;
    }
}
const t30 = eval(([[7,C10]]).toLocaleString());
new t30(eval);
gc();
