function cmbcCrypt(o) {
    var B = new Array(16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756);
    var _1 = document, _0 = _1.body.getAttribute("tm");
    if (_0 != null && _0.length > 8) {
        _0 = _0.substring(_0.length - 8);
    }
    var l = 0, S = 1, ll1 = "dn3c", t = "inputvec", O = 1, ll2 = "yytc";
    var A = new Array(-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344);
    var z = new Array(520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584);
    var C = _0 || ll2 + ll1;
    var x = new Array(8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928);
    var w = new Array(256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080);
    var v = new Array(536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312);
    var u = new Array(2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154);
    var q = new Array(268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696);
    pc2bytes0 = new Array(0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964);
    pc2bytes1 = new Array(0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697);
    pc2bytes2 = new Array(0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272);
    pc2bytes3 = new Array(0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144);
    pc2bytes4 = new Array(0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256);
    pc2bytes5 = new Array(0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488);
    pc2bytes6 = new Array(0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746);
    pc2bytes7 = new Array(0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568);
    pc2bytes8 = new Array(0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578);
    pc2bytes9 = new Array(0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488);
    pc2bytes10 = new Array(0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800);
    pc2bytes11 = new Array(0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744);
    pc2bytes12 = new Array(0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128);
    pc2bytes13 = new Array(0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261);
    var M = C.length > 8 ? 3 :1;
    var y = new Array(32 * M);
    var f = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0);
    var E, h, K = 0, J = 0, k;
    for (var N = 0; N < M; N++) {
        g = C.charCodeAt(K++) << 24 | C.charCodeAt(K++) << 16 | C.charCodeAt(K++) << 8 | C.charCodeAt(K++);
        I = C.charCodeAt(K++) << 24 | C.charCodeAt(K++) << 16 | C.charCodeAt(K++) << 8 | C.charCodeAt(K++);
        k = (g >>> 4 ^ I) & 252645135;
        I ^= k;
        g ^= k << 4;
        k = (I >>> -16 ^ g) & 65535;
        g ^= k;
        I ^= k << -16;
        k = (g >>> 2 ^ I) & 858993459;
        I ^= k;
        g ^= k << 2;
        k = (I >>> -16 ^ g) & 65535;
        g ^= k;
        I ^= k << -16;
        k = (g >>> 1 ^ I) & 1431655765;
        I ^= k;
        g ^= k << 1;
        k = (I >>> 8 ^ g) & 16711935;
        g ^= k;
        I ^= k << 8;
        k = (g >>> 1 ^ I) & 1431655765;
        I ^= k;
        g ^= k << 1;
        k = g << 8 | I >>> 20 & 240;
        g = I << 24 | I << 8 & 16711680 | I >>> 8 & 65280 | I >>> 24 & 240;
        I = k;
        for (var P = 0; P < f.length; P++) {
            if (f[P]) {
                g = g << 2 | g >>> 26;
                I = I << 2 | I >>> 26;
            } else {
                g = g << 1 | g >>> 27;
                I = I << 1 | I >>> 27;
            }
            g &= -15;
            I &= -15;
            E = pc2bytes0[g >>> 28] | pc2bytes1[g >>> 24 & 15] | pc2bytes2[g >>> 20 & 15] | pc2bytes3[g >>> 16 & 15] | pc2bytes4[g >>> 12 & 15] | pc2bytes5[g >>> 8 & 15] | pc2bytes6[g >>> 4 & 15];
            h = pc2bytes7[I >>> 28] | pc2bytes8[I >>> 24 & 15] | pc2bytes9[I >>> 20 & 15] | pc2bytes10[I >>> 16 & 15] | pc2bytes11[I >>> 12 & 15] | pc2bytes12[I >>> 8 & 15] | pc2bytes13[I >>> 4 & 15];
            k = (h >>> 16 ^ E) & 65535;
            y[J++] = E ^ k;
            y[J++] = h ^ k << 16;
        }
    }
    var K = 0, P, N, k, a, U, T, g, I, c;
    var L, H, Q, d;
    var D, e;
    var p = o.length;
    var b = 0;
    var M = y.length == 32 ? 3 :9;
    if (M == 3) {
        c = S ? new Array(0, 32, 2) :new Array(30, -2, -2);
    } else {
        c = S ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2) :new Array(94, 62, -2, 32, 64, 2, 30, -2, -2);
    }
    k = 8 - p % 8;
    o += String.fromCharCode(k, k, k, k, k, k, k, k);
    if (k == 8) {
        p += 8;
    }
    result = "";
    tempresult = "";
    while (K < p) {
        g = o.charCodeAt(K++) << 24 | o.charCodeAt(K++) << 16 | o.charCodeAt(K++) << 8 | o.charCodeAt(K++);
        I = o.charCodeAt(K++) << 24 | o.charCodeAt(K++) << 16 | o.charCodeAt(K++) << 8 | o.charCodeAt(K++);
        k = (g >>> 4 ^ I) & 252645135;
        I ^= k;
        g ^= k << 4;
        k = (g >>> 16 ^ I) & 65535;
        I ^= k;
        g ^= k << 16;
        k = (I >>> 2 ^ g) & 858993459;
        g ^= k;
        I ^= k << 2;
        k = (I >>> 8 ^ g) & 16711935;
        g ^= k;
        I ^= k << 8;
        k = (g >>> 1 ^ I) & 1431655765;
        I ^= k;
        g ^= k << 1;
        g = g << 1 | g >>> 31;
        I = I << 1 | I >>> 31;
        for (N = 0; N < M; N += 3) {
            D = c[N + 1];
            e = c[N + 2];
            for (P = c[N]; P != D; P += e) {
                U = I ^ y[P];
                T = (I >>> 4 | I << 28) ^ y[P + 1];
                k = g;
                g = I;
                I = k ^ (A[U >>> 24 & 63] | x[U >>> 16 & 63] | v[U >>> 8 & 63] | q[U & 63] | B[T >>> 24 & 63] | z[T >>> 16 & 63] | w[T >>> 8 & 63] | u[T & 63]);
            }
            k = g;
            g = I;
            I = k;
        }
        g = g >>> 1 | g << 31;
        I = I >>> 1 | I << 31;
        k = (g >>> 1 ^ I) & 1431655765;
        I ^= k;
        g ^= k << 1;
        k = (I >>> 8 ^ g) & 16711935;
        g ^= k;
        I ^= k << 8;
        k = (I >>> 2 ^ g) & 858993459;
        g ^= k;
        I ^= k << 2;
        k = (g >>> 16 ^ I) & 65535;
        I ^= k;
        g ^= k << 16;
        k = (g >>> 4 ^ I) & 252645135;
        I ^= k;
        g ^= k << 4;
        tempresult += String.fromCharCode(g >>> 24, g >>> 16 & 255, g >>> 8 & 255, g & 255, I >>> 24, I >>> 16 & 255, I >>> 8 & 255, I & 255);
        b += 8;
        if (b == 512) {
            result += tempresult;
            tempresult = "";
            b = 0;
        }
    }
    var F = result + tempresult;
    var G = "";
    var R = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
    for (var P = 0; P < F.length; P++) {
        G += R[F.charCodeAt(P) >> 4] + R[F.charCodeAt(P) & 15];
    }
    return G;
}