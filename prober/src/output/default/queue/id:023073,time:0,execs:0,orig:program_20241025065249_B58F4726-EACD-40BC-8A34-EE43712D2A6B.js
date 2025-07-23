[0.3170130236821992,533.3566815045508,-Infinity];
try {
    class C2 extends Uint8Array {
    }
    class C3 {
        constructor() {
            super.d = this;
        }
    }
    const v5 = new C3();
    const v6 = new C3();
    for (let i10 = 0, i11 = 10 + 10; i11--, i10 < i11;) {
        for (let v18 = 0; v18 < 10; v18++) {
        }
        for (const v19 in v6) {
            v5[v19];
        }
    }
} catch(e21) {
}
gc();
