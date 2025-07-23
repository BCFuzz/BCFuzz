function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = "f";
}
const v6 = new F3("g");
const v7 = new F3("g");
v7.f = v7;
new F3(v6);
const v9 = [];
const v10 = [v6,v9,"-268435456"];
try { v10.every(); } catch (e) {}
const v12 = ["-268435456",v6,v10,"f",v9];
v12[3] = v12;
[2.0,0.08617095427691868];
[-5.0,1.0,-1.7111851930154025e+308,-1000000.0,1.1473097569966085e+308,5.0,6.759534724314026,909621.7018517824];
([-1000000000000.0,2.2250738585072014e-308])[1];
const v19 = new Uint16Array();
const v21 = v19.fill().join();
try { v21.replaceAll(Uint16Array, v21); } catch (e) {}
gc();
