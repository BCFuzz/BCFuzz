const v2 = new Int16Array();
v2.buffer -= 512;
delete v2[231];
gc();
