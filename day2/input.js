const input = ['13-14 f: ffffffffnfffvv',
'10-12 w: kwtzpnzspwwwdz',
'2-3 n: nnjn',
'2-3 h: hhhh',
'2-11 c: crccccccccsccc',
'1-6 b: lcpcbcr',
'16-20 q: qsqqqqqqqjqqqvqqqqqh',
'4-5 m: mmfmm',
'10-13 h: hhhhhhchhkhhphh',
'10-14 x: xxvxxxxxxvxxxwx',
'2-7 v: tvvgvrvvv',
'8-11 j: jjjjrjwljjzjkmc',
'2-5 t: xtpftb',
'4-6 m: mmmlmpm',
'9-14 h: hhhhhhhhhhhhhchh',
'10-11 x: xxxxxxxxxxx',
'14-15 z: zzzzzzpzzzzzzzkz',
'5-6 m: mwjmmw',
'2-4 r: rrrr',
'7-11 v: vvkwlmvkvkmbwvvvv',
'16-17 j: jjjjjjjjjjjjjjjhj',
'6-12 v: vjvvddtdpvvvldvqvdhv',
'3-16 z: rktsvbkctznjkjzz',
'5-6 r: hrrrrr',
'1-3 d: ddxddd',
'19-20 s: sssssjssssssssssssss',
'17-20 b: bbbbbbbbbbbbbbbbbbbb',
'2-4 m: mslm',
'2-5 b: bbbbbl',
'3-4 j: ljjj',
'2-4 h: nlhbh',
'4-5 z: zsmwfz',
'4-5 j: jjzqj',
'9-10 r: rrrrrrrrrj',
'7-18 l: lljlgpmlltlzjltplln',
'1-6 l: zbmljsljdszwl',
'3-6 h: hhfhhqhhh',
'10-14 d: vmddcdhsdzkxdddddddd',
'6-7 s: psssssms',
'1-10 j: cndjjjjjjjjjjj',
'4-14 x: xxxdxxxxxxxxxxc',
'6-7 f: fwfffsff',
'2-11 v: dmmvlvsvvbbr',
'7-8 l: dlcllllllll',
'4-5 m: mmmmc',
'4-10 m: zmmmlmnmrj',
'5-6 s: ssshdsvbsk',
'1-3 p: pppfps',
'5-6 t: tttttt',
'6-15 z: zzzzzzzzzzzzzzzzz',
'7-12 m: bgshdmmkmmmmmfnmmm',
'10-11 l: gclgllsllll',
'3-4 d: dpdd',
'2-9 n: kgngnrcxd',
'8-10 n: knnsqnnnnrn',
'8-18 f: qhwqbwnfppkffwhjjxf',
'2-4 j: zwksc',
'3-11 s: nkszjxwhcms',
'8-11 b: tbbbbbbwbmbjk',
'7-8 z: kvxfrzzzz',
'2-5 g: hhwgv',
'1-5 s: lmkxjbbsmnq',
'2-7 p: spgxbpp',
'2-8 z: xqzpztbvk',
'4-7 r: wrtcfqrqcrlr',
'2-4 g: gzgggg',
'13-15 q: qqqqnrqqqbgqnqt',
'7-12 h: dhxhbcqhhhhd',
'7-8 l: llllflll',
'5-6 d: ddbdfddwmndc',
'3-10 j: jjjjjjcjjjj',
'16-17 x: jhmqjpbpxsttjpcxrz',
'7-14 j: jqjjjgjhjjmjjfjj',
'5-7 l: zllllll',
'9-13 d: dddddddxrdcsjdngbtd',
'13-14 k: kdwkhqkkkkkknkk',
'5-12 c: zcxwcbwfclccm',
'14-16 x: xxfxxxhxxxxmdxxxxx',
'10-11 x: xxxvxxxxxqxxxxxhx',
'6-11 d: ddddddddddtddd',
'1-3 j: bjbcj',
'8-10 p: pppptppzpp',
'3-7 z: zwldzgvztmbwwqwb',
'4-5 h: hhhrm',
'4-7 v: vvrvjvsz',
'2-4 w: prsdkgxw',
'1-4 q: fqqvqqqnm',
'5-6 k: kzjbpkkkzzktkc',
'12-15 s: ssvssssnsssdssgss',
'3-10 w: wwfcwcwwwrjww',
'6-7 t: thftndnvtztztb',
'1-6 w: qgzppbcdjbpwmsj',
'3-16 c: nccccfccrrcqhwcjck',
'7-10 b: bfscxbdbnb',
'4-14 x: xxrxsgxxwxptxxxdxdx',
'1-4 c: jccb',
'16-17 p: ppkppppppppppppwk',
'2-10 z: wqtzzbhzkv',
'9-10 b: bcbbqwcbbdvbzbfbsj',
'6-11 s: ssssswsssssg',
'3-7 c: wdcxzgtcrswqj',
'4-10 c: xszcrmcsxccbwccxwv',
'6-9 f: pffffffff',
'7-8 k: wkhkhdkkkkkkrbkk',
'3-4 q: cqqbqpg',
'3-15 s: sswvssssswssssh',
'19-20 k: kkkkkkkkkkkkkkdkkkkx',
'11-14 d: dddddddddddddnd',
'3-4 l: llll',
'3-4 t: bvtvtrr',
'13-16 b: bbbbbbbbbbbbbbbb',
'16-20 b: bbbbbbbbbbbbbbbkbbbw',
'10-11 v: vhvvvvvvvnvv',
'1-6 v: xsvmvvxvkvv',
'4-7 t: vttltqg',
'16-20 b: bbbbgsjbxkbbbbbbrbqb',
'15-17 c: ccccccchcccccxphcc',
'1-3 w: cmwbtnzwwlhr',
'2-16 j: njmqdfdsmrsptrjz',
'12-13 r: rrrrcrrrrrrdhr',
'11-14 j: jgjjjjjjjjtpjh',
'4-5 w: wwstw',
'5-6 w: mwrgwwmdwhzk',
'4-7 b: bbdlbbbbc',
'1-16 b: xbbhfbhbbbdbbdbbbbb',
'11-14 h: hhjhjhhhhhhzhh',
'2-3 t: jrtrt',
'5-6 w: pdwwww',
'5-16 m: mmhrmsvmxmvjdltm',
'15-17 b: rbdbbbbtbfbbxbbbbbbb',
'4-6 t: lzjtttqdpthkzrt',
'3-4 x: xcxxxxxxxxxx',
'15-16 z: zzzzzzzzzzzkzrcljz',
'15-20 b: bbbbbpbbmbbbbbbbbbbb',
'15-17 z: zzzzzzzzzzzzzcqnzzr',
'3-13 t: tntttttttttttt',
'6-10 s: jssmqsslsssddtg',
'9-10 p: ppppppppjp',
'9-14 d: sdxnfmpzlgvdcs',
'5-6 c: cccscvcc',
'2-4 r: rrrr',
'11-14 v: vvcvvmvvvpvvvjv',
'2-6 h: znfjphzqzdczp',
'5-12 j: msdjjbjbgjjjbl',
'4-7 h: hhhthkhhh',
'5-6 q: qqqqqc',
'18-20 q: pttqsnjcfchtfnqbjlqf',
'11-12 x: xxxxxxxxxxxq',
'5-6 j: xqbwjjcxjjljgj',
'7-14 g: pdkdbzgzjvdvwggpnnt',
'2-17 j: zhklmfrwspkgqbxjjdp',
'5-17 b: bbbnbkbbbgbbxvzxhb',
'6-8 b: bwhbbbbb',
'6-16 q: lgxlqsqqwwmqrqqfgp',
'16-20 j: jjjkjjjjjvjjjjjjwjjb',
'1-2 g: vggg',
'3-7 v: fvsvvxfvvv',
'5-8 q: vdqqqqqqcrqqxq',
'11-16 w: wwwwwwwwwwbwwwwnwww',
'5-7 s: swwzsss',
'3-6 d: hqwqcvdnqvh',
'2-7 h: hsqhthghhhh',
'4-9 d: dddtddddddd',
'8-9 d: ddddddddd',
'2-4 q: qqqsq',
'4-6 t: ttnlqt',
'4-6 s: sssszscs',
'2-7 l: ssfllslplqll',
'1-3 m: vmmlm',
'6-13 q: qtqqqrqqqqqqqqqq',
'2-10 d: zbldzlzssd',
'4-5 n: nnndq',
'8-18 b: wbbdgkvgscbdgqvxdj',
'5-6 r: srrtrrrrr',
'6-8 m: mmmmwbpm',
'11-14 h: hhhhhhhthhhhhm',
'2-4 p: pvpxpp',
'5-6 g: ggvgng',
'4-5 x: xxxtp',
'3-10 v: vbvvzvhvvvvmvbcvvwrv',
'11-13 d: ddddddddddxdldd',
'4-5 g: gggggggggggngfggg',
'7-8 j: jpjjjjhw',
'2-6 m: jmfrmmhhsgbmmm',
'6-10 v: vrvvvbvvvsv',
'8-15 c: cctrcccpccccgcc',
'14-16 d: ddddxdsdzwdddwdsddh',
'5-6 m: mmnmmb',
'2-6 d: dtwlswdnlkn',
'12-13 x: vldxvmxcnndzx',
'4-6 k: kkkxkm',
'1-4 p: pppp',
'11-16 b: bbbbbbbbbhdbxpbbbpb',
'1-5 j: jjjjjj',
'6-8 q: zqwdqszvqwqbrmhfqqm',
'2-5 q: nqqczhb',
'12-17 v: vvvvvvvvvvvtvvvvpv',
'1-3 w: wwlww',
'9-11 n: nbndcjnzntnvjnk',
'3-4 q: qqcr',
'15-17 p: plppppppppbppppplpp',
'1-2 c: cvdlsccrccldccvfcc',
'4-5 p: bpppcp',
'19-20 d: dddddddddsdddddddddd',
'2-4 t: bwbtmjbgkdlpjkrxt',
'2-5 l: llxdblrcvnpclt',
'11-13 b: bpbbbbbmbbbpbtcbbbzm',
'6-7 p: ppppppp',
'5-18 m: mqmmqpmmmmmwmpmzchms',
'3-6 g: ggggmggkgg',
'11-18 z: wjwlzzptzzzwbmzzgz',
'5-7 b: bbcxbfbwbbcn',
'4-5 p: szppp',
'2-12 b: bbbbbbbbbbbmbb',
'6-10 m: jmmmmwmtmfcwwxm',
'4-5 m: mrqzmmmptfkmch',
'13-15 q: qqqqqqlqqqqqqqqd',
'1-5 b: kbbbnb',
'4-5 t: qdtttszwwppbtllp',
'12-14 c: cccccccccccccm',
'4-5 g: gggdhg',
'1-4 b: wbtbb',
'3-6 d: ddrdgbdvdv',
'14-15 x: xxxxxxxgxxxxxvdx',
'13-18 l: lllllllllllllllllll',
'5-7 p: zjsxppv',
'4-13 v: vvvpvvvvvvvvf',
'17-19 q: qqqqqpcqpqqgqqqqqqmq',
'1-5 r: rlmrrr',
'8-9 j: jjjjjjjjw',
'2-4 q: dswq',
'16-17 z: zzzzzzzzzzzzzzzzzz',
'4-7 h: hhhzhhw',
'11-12 l: lllllhhpllllqlllln',
'11-12 h: hhhhdhhhhhrhh',
'3-4 j: pkthmjsjqx',
'15-18 b: bbbbbgbbbbbbbbbbbh',
'4-5 j: lsxklmdwmhj',
'1-2 p: pptp',
'8-10 g: fgggzrnggg',
'3-7 k: njkdhpkpqtqxhqwkp',
'10-11 l: llllllllllz',
'12-14 q: qjqhkqmqqwqgqcg',
'1-3 m: mmmm',
'8-19 c: dwzvhvbcpdbhcnrlcncx',
'3-7 x: xtxjljw',
'6-18 t: pttgnchttttttttqtt',
'3-4 p: pppxpp',
'15-16 k: kkkkkkkkkkkkkkvr',
'2-3 x: dxxmx',
'12-20 m: mmmmmjmmcmdmmmmmcmmm',
'6-13 h: sthvjhlhfhxlhb',
'4-5 t: pbrlttgmmwztxtrt',
'3-7 p: dpptmppp',
'7-9 p: hpppppppp',
'3-4 q: qdgqqq',
'1-4 c: cffcrkpdczhbj',
'1-8 d: cqdwddlrddd',
'9-10 n: gnkmnxnzmn',
'3-4 k: kkxx',
'1-7 d: vnddddn',
'8-12 l: jllnlcllllllllvllb',
'1-4 n: nnnnnhnnnn',
'9-12 s: tssssszsssssbt',
'8-13 h: nhnhdtkjbsfvbsh',
'2-4 v: qmvs',
'3-6 c: chcxccch',
'1-5 d: ddddd',
'11-15 l: pklllvllwlmlcklllll',
'1-3 v: dvkbwsgjzqzzjmznd',
'5-6 j: zjjjjjs',
'1-4 f: vbffrwfr',
'3-5 x: xxxxxrfdxmnbkrjbdzcx',
'16-19 s: spsssbmrpbwrhqssgft',
'13-15 v: vvvrvvvvbvvvvvv',
'6-9 q: lqfqgcwtdqzgrqqp',
'3-5 w: fwpwx',
'7-8 h: hnhschhfphjzphwh',
'2-6 r: rrrrrrr',
'8-10 h: hhrhzhhttm',
'9-16 w: wwwwwwwwfwwwwwwh',
'2-3 n: zbnfnlpcnjqftpv',
'14-17 k: rqwlkzqczczrlktcl',
'6-7 f: ffffffff',
'3-6 k: nndkjtpjzpmkkr',
'12-17 p: gpppbpmjpptpfnzpb',
'16-17 n: nnnpnnlnnnnnnmnnnnnn',
'4-6 r: rrsrwr',
'4-7 x: cnljrzcj',
'7-8 s: srgtqlmc',
'8-10 n: nnnnnnnvnn',
'2-5 g: ggqggb',
'7-8 h: hhqhgpxb',
'4-12 b: bxbchbbbbbbbb',
'2-4 z: qfzng',
'6-13 m: pcmmwdkmzlstn',
'3-4 v: qvdc',
'2-10 t: tktttttttmt',
'9-15 t: tttttttttttpttw',
'8-13 p: pppjpppkppdlv',
'6-9 g: gggggngqg',
'2-9 k: lzvkqkkkkk',
'8-12 h: ldpnjvchhshx',
'5-14 c: cccccvrccccdbccchjc',
'14-19 k: kkjksgrrkklhkkkkkkt',
'5-15 r: hrrrrrwmrlrgrlz',
'7-17 g: hbjtgsxbgrgggcjlk',
'4-6 q: lqcbqvzqrqzqxqnqd',
'5-8 x: xkdxsxxf',
'12-16 m: vxlfjgzgqhxmlvmmqmm',
'2-13 c: vccvjvqrgrsrqv',
'4-6 l: ltlrlpvnl',
'12-16 p: ppptdppppppcfppzpgsm',
'18-19 q: qfqpvwpwjqvlnrmvsqq',
'5-6 m: mmmmmh',
'6-7 m: mmmmsls',
'3-4 p: pvcg',
'6-7 h: hhhhhhj',
'1-4 g: gkggc',
'3-10 n: sqsndtgnjbnljnn',
'5-11 h: tcmlhlnbfnhgt',
'9-10 t: ttttttttxl',
'6-8 x: mxvxxxxhxxccbx',
'9-16 g: rgggthgxggdggjgg',
'7-20 w: wwnwwhvmtwnvwwpzdxvt',
'13-14 t: tttmttlttgttlptt',
'5-6 f: ffffpg',
'5-7 z: qzzzzzqzz',
'1-3 b: bfbfdhkwdzttcldtr',
'5-8 n: nnnnrnnqnnnn',
'7-18 m: hgnrbdmvmzqmhnhhpww',
'2-6 h: rjghpwxhn',
'5-10 m: bjqjmmnbvmlxpvvdds',
'3-4 v: hvjttv',
'4-8 n: nnpnnnnnn',
'1-10 g: gzxghcgkggggtxg',
'4-6 b: pbgblbbb',
'4-7 c: ccccccmc',
'2-4 g: ggwgtzvxqhjqphfg',
'3-5 t: htdtt',
'8-9 t: tttttptttttt',
'4-5 v: dvvvd',
'6-12 p: skzhnpblmpppcptfpll',
'15-16 l: llllllllllllllvp',
'6-11 b: mbbbbjxbbmbbf',
'2-4 t: mtqwtnt',
'2-4 h: wfhkh',
'5-6 w: wwwlwwwkw',
'7-8 k: kskkkktz',
'5-6 g: rggqcv',
'2-4 z: krmw',
'2-4 q: qqwqlrqcbxlxbpqg',
'14-18 m: mmzmmmmnmmmmmtmmmm',
'1-5 p: pqwfpnp',
'3-7 w: dwwxdwgwwksm',
'8-11 g: bkmcfcddjvw',
'7-9 s: srsszspss',
'3-4 r: rjrsz',
'12-14 k: kkkkkkkkkkkgkl',
'13-14 f: fffffffffffffh',
'7-9 r: qgxpglrlr',
'4-6 l: xflkll',
'2-9 d: gdddddddrqdddd',
'2-3 k: zskkzq',
'3-4 z: jzrtwgmtl',
'3-4 b: bnnbbx',
'1-9 r: rhmrwwrfmsb',
'7-10 b: btbbbbbbjbbb',
'7-8 t: lmttpttq',
'1-4 s: rcls',
'11-12 k: kkkkklkkkskq',
'14-15 p: ppppppppppppppp',
'3-7 l: dcslvkjgjcdk',
'1-6 l: hllhllpl',
'6-9 z: zdlqztzzkzz',
'10-11 r: rrfrrrrrrrqjpkkrmrrh',
'4-5 v: bvpqvvkvrxnvzmghbhmx',
'10-11 v: vvvvvjvvfcvvcvpj',
'10-11 j: jjjsfhdmjtcvbzj',
'4-5 z: zzzzzz',
'14-15 l: lllllllllzlllkcnl',
'3-8 c: dchcjjrccvm',
'12-14 b: vrwbfbqbbbbkbhgqjjh',
'8-9 g: stggqgctgpgggctt',
'15-17 p: pppppppppppkppqpp',
'7-8 q: qqqjvqhmqq',
'3-4 x: xxxxx',
'7-8 g: ffbgglgzpjgqvnglpsgh',
'14-16 r: rrdrrrrrrrrrrgrrrd',
'10-13 l: lllllllllllll',
'6-14 q: qfqzqnqqmhqqsp',
'2-3 q: qqqqq',
'17-18 f: ffffffqfffffffffftf',
'11-13 h: hhhhhhhhhhmhz',
'3-10 c: cccmcccccfzc',
'8-12 v: vvvvvvvvvvvvrfwrvv',
'3-4 v: vrnx',
'1-12 v: gfvsvkvvvzvcvsv',
'9-10 b: lbtgbbpcfbgb',
'6-8 f: fgnffkfshhfbfc',
'8-10 w: wwwwwwwwgpltzwzk',
'7-12 b: btbbjbhbbpbbqsbbbvp',
'11-12 r: vfcvrrrzrhvc',
'19-20 g: gggggggggggggbggggjh',
'11-14 s: sfsvsfsswsssscxssm',
'4-6 c: lcclcc',
'7-8 g: gggggggr',
'10-14 g: gdcpmgxlgggggtgbgg',
'2-3 b: bktb',
'9-13 k: krkkkgkkkkvkkk',
'2-12 f: bwtgngzflzcfchx',
'2-4 m: mmmmmmm',
'10-12 b: bbbbbbbxbbblcbpb',
'3-4 c: ccct',
'6-8 r: kgqvrrrjn',
'10-12 f: ffffffwfffff',
'6-7 c: ckcjcjccc',
'10-12 l: lllltllllllxll',
'3-6 q: qqgqqlxqqq',
'4-5 b: nbbbbb',
'7-11 r: rrrrrrrrrrrrrrr',
'10-11 s: sssssssssss',
'1-6 w: wwwwwwwlww',
'5-7 l: lrlmlll',
'8-12 c: fbcmjxccqcwc',
'9-10 b: ljmbxwbbbbbhbbb',
'2-4 h: shwgvlw',
'15-17 t: ttptttttktttkttttt',
'2-5 d: dddgdd',
'2-14 x: xbbtnzdvbszrlxl',
'8-10 c: cccccccbcx',
'10-12 k: kkkkkkkkmkkc',
'7-17 r: rzbcshqhmrzrktzdr',
'5-16 k: kvkkdkkkkkkkkkklk',
'1-7 p: hkplfbjdhsh',
'1-6 z: pnzzzz',
'12-18 m: mmmjmxmmmmmmmmmmcd',
'5-7 k: kskkdbsk',
'9-10 b: bbbbgbbbbw',
'4-6 c: cccccjs',
'19-20 w: wwwwwwwwwwwwwwwwwwwf',
'7-11 j: drzjhxkjjjkwr',
'10-15 c: cccfckccccdccxc',
'1-3 d: ddddc',
'13-14 j: jbjjknjjjjjjjjjjjzzc',
'1-4 m: mzmftx',
'1-4 t: rttt',
'12-17 t: tltqttzttttjwcttrwtt',
'6-10 m: rmfmrnmmmdmqp',
'6-15 p: jpfpppwppppppznpppp',
'4-8 p: mppxctpb',
'2-4 z: gwzzrn',
'3-4 p: ppfpp',
'3-4 b: bbbh',
'11-17 l: llllllllllllllllhll',
'4-6 m: mmmmmmm',
'4-6 c: ccccjx',
'11-14 g: gggggggggggggg',
'3-4 l: llflq',
'9-13 p: pspvvcpkpcpzpfpk',
'1-4 n: nhwn',
'6-10 j: jjjjjjjjmjj',
'9-12 p: ppgpwxpplgppzpppwpp',
'10-14 h: hhhhhhfhhhhhmxh',
'8-10 l: llllllmcwfl',
'7-8 h: hhjhhhps',
'8-11 v: grvvvgbvxvvlhvvbdvr',
'5-6 m: fmjjbmp',
'1-2 x: xxhd',
'11-15 n: nnnnnnnnnncnnnm',
'1-8 g: jgggbggd',
'13-15 l: lshllllllllllll',
'5-12 r: crrsrrrrprtrr',
'10-16 k: hkkkkkkjkgtkkkkkq',
'5-16 j: prxjxjjdxzjjvjjwfj',
'7-8 k: pdkkkkkzkzw',
'3-4 s: sstg',
'1-5 x: vxxxb',
'10-16 s: tqmzsfksjzfmlqzsdb',
'2-5 r: rcrxjr',
'10-15 v: jcbvvvhvvvkwrgvvvvv',
'4-6 n: nnxnnpnn',
'13-18 l: llllllllllllbllllgl',
'9-11 g: vwqgnrzlclgqtp',
'2-3 f: fpms',
'3-5 l: llllllll',
'7-12 x: xcvxzxxhxxxxxxxxqxxv',
'6-10 b: fcfpwbmbhbpbbqkkbxb',
'8-11 z: nrnzzqzzzzck',
'8-9 g: nggdfgdgggfggg',
'2-6 d: sdztkkfvpkddggdxd',
'10-14 g: nhdstmlfxcggcs',
'10-11 g: ggzfglgggmcxgjh',
'3-13 x: cxjxxxxxxgxvj',
'9-10 h: smlxphtmkhf',
'7-8 v: rhdvgcvrdvvvvvxwvssh',
'7-14 n: nnnnnnncnnnvnn',
'3-6 z: zzzgznzz',
'6-10 l: llwmgllljllll',
'4-5 v: vwvvpvw',
'7-8 m: mmmmqvmqmv',
'13-14 z: zzzzzzzzzzhzrcz',
'3-8 h: bdmhcxpgbpjvwfmh',
'3-5 h: nhhjk',
'11-19 b: zrrmrqbfvwbnmvkvbzbv',
'3-8 c: ztwqhccmwzvcbxjjrc',
'4-9 h: hhhhhhhhh',
'2-15 d: lddzlxhkscrmfbd',
'3-9 s: kpscwnwzj',
'10-11 w: zwwlwxwwwwwwww',
'4-5 v: dpvjr',
'1-3 d: ddtd',
'3-6 x: xxdfxxxrbdh',
'3-6 g: dghwgxg',
'8-10 z: zzzzzzzpzz',
'13-15 p: pjpxpppppdcpphlppjp',
'6-16 j: jjjjjljnjjjjjqjjjwx',
'11-17 f: fffffffffflfpfffxff',
'8-10 j: jjjjjjlwjkjrdjjjj',
'8-9 w: wwwwfwwdkww',
'4-9 x: qpxbhxwxxkx',
'5-7 w: wwwwbwl',
'1-6 m: mmfrmmmm',
'8-9 l: lllllvlsl',
'3-4 d: dddd',
'6-8 c: cqcptcfcgcrzbjcccp',
'10-11 k: dccpkmkkgkkdzkkkkkk',
'3-4 j: jjjr',
'3-9 h: hzhwhchzhjg',
'7-8 g: bxgnvvzfsbggdgg',
'2-17 f: ffffffffffffffffffff',
'7-13 g: ljggdgztggvgtggg',
'9-13 x: rxlxrxxnwqxpcdxq',
'10-11 j: jjctjjjjjfjj',
'8-16 k: zpzskgkkkvsbxhsk',
'4-5 l: llljl',
'2-6 b: bbbbbb',
'1-3 w: swww',
'6-8 r: rrrrrbrbrr',
'8-9 t: tttttttth',
'3-5 s: sssss',
'3-14 q: qqxqqqqbblqqcqmqsq',
'7-8 v: dmfvccvvvbvmwjvvvqfv',
'5-7 v: qvvvvvvvv',
'4-9 c: cgcgvncctwrtv',
'3-5 p: ppnpppp',
'13-15 h: hhhhhhhhhhhhhhhhnhhh',
'5-8 r: rrrvpgrdbhrc',
'2-9 q: szlqwzwhqxbxkr',
'5-6 c: cwrmhxcpxchzccb',
'4-6 z: zzjczz',
'12-14 p: pwqkbphzplxhnpm',
'8-13 t: tkkzjttrstbtwttd',
'15-16 m: mmpqmxbxdzmqmmmb',
'4-6 c: ctcpczdd',
'2-3 j: fdjjj',
'15-19 k: kkkkkkkkkkkkkkpkkkwk',
'2-3 c: cccc',
'1-2 w: wwfqwwgpmv',
'2-3 h: wfzmhm',
'3-10 s: wbsbvhfxjgxfqstwqn',
'15-16 r: sxrzvkqpqmgzgtrr',
'3-5 m: fmmtmqjxzss',
'12-13 k: ddsnpkfvknhwq',
'5-11 z: lzwvzhtzzzz',
'12-13 t: tttttttttbdgtft',
'14-19 g: gggggggggggggggglgnv',
'3-4 r: rrrr',
'3-7 h: xchhnhh',
'10-11 n: ndnjnnhnnnk',
'5-7 l: llllhll',
'3-5 p: ppppb',
'11-12 s: rrsjzvswsdtxssv',
'2-10 z: ztxzzzzzztzp',
'16-17 m: mmmpmmmmmmmmmmmmmmq',
'1-6 b: wkbfntzw',
'10-14 n: nnnngrnnnnnnnnnn',
'1-3 b: pbdfsbbp',
'6-13 n: brnwnhnnsnnrwncnmz',
'2-11 f: mlhpdjflklzmhxt',
'1-2 f: shzsffl',
'8-16 k: kkkkkfkxfwnslkkm',
'13-14 b: bbbbbbbbbbkbqbb',
'2-7 x: zdxxxxxx',
'6-10 h: hhthmpvhnlk',
'6-7 p: tppfpqpcppppxpmpcpp',
'3-5 m: grmkm',
'5-11 w: vcwbwwwbwwswnrdwfwx',
'1-6 s: sssrssssx',
'13-14 j: jjjjjjjjjjjjgj',
'14-19 q: sbqqzqnqnlzdrlqqqtkl',
'3-4 t: btdttvzrvnjst',
'1-7 s: ssbsssmhssssdsc',
'3-4 z: vcdzj',
'6-13 v: vvvvvvvvvvvvvv',
'2-7 t: ttttgpthqhmth',
'5-9 z: zzzzwzzzl',
'10-15 w: wwwwckbzwwwwkwwlrwb',
'2-7 r: wjrbdzrjxrstrc',
'1-8 z: dpzzzvcsx',
'4-6 c: nccxccvcccczcccdc',
'1-10 c: cccccccccc',
'3-7 d: zdmdpdntdpzncdbff',
'5-9 x: xvlvxldrxxmbdcdxxxz',
'6-7 p: ppplppjcwcpp',
'2-7 d: pwnhpdd',
'2-3 q: hqqsdqxs',
'6-9 t: smttzjmktq',
'7-9 t: ttttttttp',
'4-19 w: wwwrwwwwwwwkwwwwwwnw',
'17-20 s: cssvssssssssssssssss',
'10-11 s: srssssssssss',
'5-6 f: ffcfjt',
'3-4 d: ddgdddddddd',
'2-15 s: sssssssssssstsssssss',
'2-4 c: kmccnnt',
'2-3 f: ffff',
'10-14 s: vspjssnsssssshvsq',
'9-10 k: skkkkkkfxkkwk',
'3-5 g: mgnggjpgspcf',
'4-15 z: zzzdzzzzzzzzzzzz',
'3-4 c: cgcc',
'6-7 s: sssssjs',
'2-4 z: ztzz',
'17-18 w: wbqwwnwwwmwvwwhgdnl',
'13-15 d: dwddddddddddwdddd',
'4-7 g: gzghgcnq',
'3-9 n: snnnnnmll',
'2-7 j: sjhtsxj',
'2-6 h: khvzdhhr',
'2-10 t: tttttttttttttttt',
'4-6 x: xxglxwjrx',
'3-4 r: rjrc',
'5-13 b: bbbbbbbdbbbbbb',
'3-4 q: qqrhqq',
'8-12 g: ggggkggdgggbg',
'3-12 j: jjjjjjjjjjjjjj',
'1-5 c: cbcch',
'10-11 r: rrnrvrrrrzn',
'4-16 j: jjjpjjjjhjjjjjrjjjv',
'8-9 f: fffffzdsvfccfr',
'14-16 f: ffzfjfftfffffffffff',
'2-8 n: ngnnnnntnnnnr',
'6-11 n: nchnnvnnnndn',
'4-5 w: sfwvm',
'6-14 s: ssssssvsspssqhsss',
'3-4 m: sjjb',
'2-4 d: dnkjd',
'3-9 s: twsgkmqstq',
'6-14 f: ffffffffffhfff',
'10-15 w: wmwlwwwwfgwwjrzwwwww',
'3-11 f: fffffkxfffffmfff',
'1-2 l: jlrpl',
'3-14 p: pbnpkbppxhppmpp',
'1-14 v: bvvvtvvvvbvvvh',
'3-4 s: zssvs',
'3-4 l: llljrlk',
'8-12 f: ffcfffczlffff',
'3-13 m: xsmgpvzsrrwmxtbktsrj',
'5-7 j: qxvjjlqjjjjj',
'3-4 r: rbdwg',
'13-14 d: dddddddddddddg',
'10-12 f: lqvhjnkfrfffv',
'6-7 n: njnnnhz',
'11-13 v: vvvvvvvvvvvvs',
'12-13 v: nvvsfvvvvvnvdvjxvvv',
'2-19 s: slsssssbsskspssssts',
'9-11 n: nnnnnnnnnnm',
'4-5 j: mhngjjrhjcjkjw',
'12-18 p: pnfwppppprsqrppltppp',
'9-13 s: wsssfsjsssfssss',
'6-8 b: bbbbbzbj',
'9-12 c: lcccccrccctv',
'7-11 w: wbdwwqwwkbwws',
'6-19 c: cccrmldccfhtvclcccc',
'9-14 h: bhhhhdhjkhhhhm',
'7-15 g: gkgggggvcgggghgggz',
'4-8 k: kknklwkkkg',
'10-13 c: ccccccxcccccccc',
'10-14 c: ccbcfcccptcczbcc',
'8-9 s: scsssssss',
'1-7 v: bvvvvvvvk',
'4-8 s: dspsskkstklsz',
'9-10 b: blbkkzbvvpbhbbbb',
'1-2 m: qgntnbccqm',
'7-14 w: wwwwlftgspwmwr',
'4-13 n: tnxmnnwwnnlnnnnz',
'3-5 c: cwzbs',
'3-6 d: dddddl',
'6-8 s: qsfssrnsst',
'1-2 l: llxcx',
'9-11 g: zhzkcbglvgw',
'5-11 f: lfzgtbcmzzw',
'6-19 m: gcbgjbqrdkswqhmxjct',
'1-3 z: dzzz',
'9-13 t: wttftcddttmtttgttnvt',
'14-15 z: zzzzgtzzwzzzzzzzzz',
'1-11 q: qqqqqqqqqqqq',
'4-5 j: rxjjjxjwjjj',
'3-5 v: gqjhjvlvlbmkgssd',
'16-17 q: qgcbftwncjhdzwqmw',
'1-3 g: tjftgp',
'11-16 l: rlllllllllgglllm',
'4-6 z: zprzvrfbpblf',
'7-11 j: jjjjjjjjhpjmjj',
'3-4 l: ltlrblllwljljlc',
'8-11 k: kkvkkkkkbqkskrkkd',
'5-10 r: hjrcrrrdvtrkrvrxrr',
'5-6 x: xxxxpx',
'13-16 g: gmggggggcggpwgghgt',
'3-4 h: hzzp',
'13-15 h: hhwhhghhhhhhhhh',
'3-5 t: mlftttt',
'8-13 c: cccccvcdccccfcccccc',
'1-6 k: kczzpq',
'8-14 t: rtcttttgtttttgtttz',
'6-7 l: lhsvlll',
'1-2 x: cxlr',
'8-10 t: rtbtttttsblttttb',
'11-14 z: zzzzzzzzzzdzzzz',
'2-3 t: ltttbthjdxwbxrv',
'5-6 x: xxxxxxxkx',
'8-12 f: fffffpffwfng',
'5-6 x: xxxxflxxxxx',
'5-7 d: ddddvvk',
'4-8 j: ttjjjjhj',
'2-5 p: rtrmpksjdvpplmrkl',
'9-11 s: ssshsskssssssr',
'5-8 j: wjnjjvjjfjjhf',
'4-6 q: qlpcjqqqq',
'13-14 m: zctdnmkjstxbmmfqtns',
'4-11 n: nqntnngnvmnknrnwnnl',
'3-5 d: ddfvdnkd',
'9-14 j: wsznlrpljmjwjjjkmtk',
'2-6 w: wlwwwww',
'9-12 j: jjzjxjjjjhjp',
'10-13 v: zvvvvvvvvfvwlvvvv',
'3-18 x: dzxcqgwxpwxvpmcxxdxx',
'2-3 w: wsgwwd',
'3-20 n: nrnfxnnnnlnnnnnfnrhp',
'3-8 f: fmvjwsffvxjfnlw',
'5-6 l: llllcs',
'3-5 b: bbbbbbc',
'2-7 l: rlwkflnsm',
'4-18 m: dqskhdqgmrpbgtmdnp',
'4-6 r: grpxzr',
'5-7 m: mmmmmmjmm',
'7-8 b: bbkkbbkbb',
'1-4 r: rwrtr',
'5-6 g: gggcggg',
'4-6 l: qlcbwrsf',
'16-18 t: tttmtttltvtttttxtrtt',
'3-4 z: zzzz',
'6-10 g: gggggtgggg',
'12-15 f: tffffffffqrffvvftffh',
'10-16 w: wwgwwpwhqdwhwpbw',
'5-7 m: mpmmmmm',
'3-5 b: bbxtbbb',
'5-10 x: xxxxbxxxkjkx',
'10-12 b: bjbldbbbwbxg',
'3-4 g: gnggqgg',
'2-4 s: sstst',
'6-10 j: jjjjfvjjjj',
'16-20 r: rrrrrrrrrrrrrrrrrrrr',
'4-12 b: bbbxbbbbbbbbbbbbb',
'3-4 k: kkpk',
'4-7 s: ssssqsh',
'10-13 b: vbzbbbbnblbbb',
'12-14 f: rgqffrfsvftwff',
'2-4 x: bfxvhmsxnqxz',
'10-12 c: ccccccccccbcc',
'1-4 l: llxbmjpll',
'9-14 f: ffhfmpfffffzfgcg',
'3-4 n: ndfm',
'1-6 k: lkmdzgfbkfktkkvkw',
'12-13 q: qtkqqgqbqtqgvqqqzq',
'7-9 d: ddddddhddsd',
'4-11 j: kdqjjjjjjxg',
'4-6 k: kkkgkm',
'6-12 n: nnnnndtnnnnnnv',
'2-6 c: dccccdc',
'10-11 v: vvvlvvvvvvb',
'7-10 w: wwwwwcwtzwkpvjqwsb',
'1-5 x: xxxxxxx',
'5-8 g: dhggzggsggggglgggg',
'8-9 t: dttttttdtfnt',
'11-17 g: cqgglgtwgggcbwjvwg',
'1-2 t: ttttt',
'16-17 j: jjjjjjjjjjjjjjjjjj',
'4-7 k: lkdkhkkkfk',
'15-17 z: zzzzszzzzzzzzzwzlz',
'3-13 w: wwswwwwwwwwwfwww',
'5-12 h: mstzhsghhhhnzmdrh',
'10-12 h: hhhhhhfhhphhbhhk',
'3-4 j: jjsd',
'11-12 k: kkkkkkmkkmfd',
'19-20 d: ddddhdddddddddddddxj',
'7-8 g: gggjggrg',
'4-5 m: mdzmv',
'3-4 w: wwww',
'7-8 b: bdbwbbbbb',
'2-12 q: dxqqqqqjqqqlqq',
'3-6 w: wwwwxwh',
'9-11 s: smhnkssssssstxj',
'5-6 n: nnpnkj',
'7-8 s: qsgdxkjs',
'9-14 m: mmmmmmmmsmmmmv',
'1-3 v: vvcvv',
'2-5 x: kzxgjttwxspclfx',
'5-8 c: ccctpcckz',
'5-6 h: hhhchthqxchh',
'3-7 t: hnrcqdtttmtxtnmhcf',
'2-4 v: vvlz',
'4-5 k: kbgkl',
'9-12 x: mhzpjqtxqnfrcnwhk',
'7-11 z: slztclzvxbzmz',
'13-14 l: ldllllllllllkcl',
'1-2 l: fslcthfv',
'12-16 b: bxbkbbbbbbbbbbbb',
'1-4 r: rrmr',
'8-11 d: dddfdpdddtdd',
'17-20 n: nnnsngnbnnnnnnnncnnn',
'1-16 x: xxxxxxxxxxxxxxxxx',
'2-4 z: zqzv',
'1-4 m: fnwm',
'2-3 j: jqvd',
'10-12 h: ghhhhhjhhchg',
'14-15 v: vvtvvvvvvvvvvvv',
'4-6 f: ffffff',
'8-20 g: tgghjfglrzggggcxhcgg',
'9-11 p: pvpmzppppkpk',
'5-18 x: xxxxnxxxxxxxxxxxwlzx',
'10-11 m: mgdmrfchqwmfmrlnq',
'7-8 g: gggggzxs',
'4-6 n: vjnchzknzbvnvn',
'17-18 p: pppppppppppkppppjp',
'6-8 d: dddddfddld',
'1-4 r: brrr',
'2-10 m: mzmmhqmmmmkmmwm',
'8-15 f: cfjwxkgmfkxdmwxf',
'3-8 c: djskjzcmwjcz',
'2-3 k: hkckkjbztrggrffvxwm',
'11-13 d: krddnddddrddgdddd',
'4-5 f: zjsndf',
'4-5 r: rrrgl',
'1-2 z: tsbn',
'1-11 s: sssdwtjssssskkszms',
'6-16 x: xfxxtxxxxxxdxzxmxx',
'5-13 m: mmmmmmmmmmmmmvm',
'2-4 z: zdzj',
'3-4 d: dddd',
'3-4 n: nnmnkv',
'14-16 d: dfddddddddddtddddqdd',
'5-7 n: jnnnnnnj',
'8-16 q: qqltjqqqqqqqsqqfq',
'10-14 s: sssxsmsssvqjssss',
'6-7 w: wwwwjwwxwd',
'2-5 m: mzqcndqmnmmgwmsspm',
'9-10 k: tkkkkrkkkhkk',
'3-5 r: rxrrrrr',
'7-11 c: glfcdqrcnfhc',
'8-9 r: rrrrrrrjd',
'7-8 d: ddddddlk',
'2-7 j: pjsmjjr',
'2-4 x: txxx',
'13-15 f: ddkhqfnbcmtwvbf',
'7-11 n: nnnnnnnnnnvn',
'7-9 m: jmmmlgmmthlrm',
'8-13 w: wwwwkwwgwwwwfrwww',
'2-6 d: drdrhn',
'8-10 k: lnkfrvgkzkchq',
'4-7 z: lxjzzzzhzprrzzzpcwj',
'1-2 s: lssc',
'2-3 n: jmkcngpn',
'3-9 x: xxmzxnxxxx',
'3-12 v: nqwshwqgfnwvwvnf',
'5-8 m: zmmmmmmmqlkprv',
'1-5 q: qpqrqwqsvpjqf',
'14-18 q: qqqqqqqtqqqcqqqqqq',
'13-16 v: vvvvhvvvvvvvrvxdv',
'2-6 r: rrlrrrk',
'6-8 r: hmsrxsrkprdrrrl',
'14-16 s: sssssslssgswssssss',
'3-11 t: ctttvsnfcstzktktb',
'1-11 c: gwfbddphwnqcmf',
'3-18 h: hhhhhhwhhhhhhhhhhs',
'7-9 c: cjjcrtpvctccfcc',
'6-14 f: fffffgfffffffff',
'8-15 z: zzzzzzzzzzzzzzdz',
'9-16 d: ddddbdddhddddqpd',
'1-2 q: qffc',
'3-5 l: grcsjln',
'12-13 q: qqqqqqqqqqqqq',
'4-5 q: qqqlk',
'1-3 w: wwwx',
'3-4 w: kwwf',
'5-15 m: pkwmgmmxspzxhmmrmp',
'5-18 t: ttfthsbwntpcnttmwtc',
'14-15 p: pjpjwppkpxpqkpf',
'1-3 n: nnnn',
'8-9 j: jjjjjjjbxj',
'4-6 w: gfhwfwwmfx',
'8-11 k: kkckkkknkkkk',
'13-14 m: mmmmmmmmmmmmsqmmm',
'2-4 s: tsrz',
'9-13 j: tjvjqpnjjjlkwjjljrj',
'3-4 f: xwfgf',
'2-7 h: rhxshbh',
'10-18 j: jjjjjjgbjjjjjjjjjjj',
'5-14 n: fnwnnnsnnnncnpnn',
'9-13 h: qhhlnhhhqhhhm',
'3-17 h: hhfgzkhhjhrbhwdcpbnh',
'2-4 c: qccrblqtcd',
'13-16 s: ssjssqssssqsxssw',
'10-15 n: nnnnnnnnnqnnnnf',
'2-3 m: nmtl',
'2-4 w: wqwdt',
'4-7 v: vvvvvvvvvvv',
'5-6 w: wbctwwwgj',
'4-6 q: qqqttqzzwsxp',
'2-7 r: rcrrrrrr',
'10-12 d: sdmddcfdddzvdddddq',
'1-15 f: ffffffffffffffffff',
'3-7 r: rrwddcjgr',
'2-11 t: tttttgttttttt',
'3-6 n: nhxgnqnnfs',
'1-3 t: pqtwt',
'8-17 r: rrrrrrrrrrrrrrrrrrrr',
'3-16 t: tktnpjtcthrhtqltq',
'5-6 h: kcmkkqdrbhhxm',
'3-4 l: llll',
'1-14 g: gggdgrvjtqfgpk',
'5-8 p: ppppplwcpp',
'4-7 d: ddddtdmdd',
'1-7 q: qqvxrqq',
'8-10 v: pvvvgkqrvvgnvlvv',
'17-19 g: sdgghgnggggggfbmggp',
'6-8 x: rvjknxlx',
'13-14 r: rrrrrrrrrrrrrb',
'3-10 b: zbkmbbbbbb',
'4-6 d: kdtbdmkd',
'8-12 m: mmzmmmmmcxmmh',
'7-8 n: gspnbfnp',
'13-14 l: llllllllllllnf',
'4-5 b: rzbbbxblvbwbrbbbx',
'3-5 x: bxgrcxxrk',
'2-4 j: jjjh',
'11-13 r: rrrrrrrrrfrrrrrrr',
'4-7 q: mwqqfqqqnwqwq',
'2-3 g: sghvhggvv',
'4-5 k: kkkkk',
'11-12 s: ssssssskssgss',
'16-17 g: dcgqnwtptvvlfkdgg',
'4-5 v: vvvqc',
'2-6 s: xsksrmrrd',
'7-8 w: swwwwwfnww',
'5-6 m: hmgchm',
'6-8 m: mmmglzmmmhfnfqk',
'2-5 c: bnjknt',
'2-3 x: lxxj',
'1-4 g: gqgpzgtj',
'3-12 c: cngsrcvcjccxgcc',
'2-11 z: zpzzzzzzzzzzz',
'6-7 s: ctsxgslsjbstspgsl',
'1-2 v: vnqs',
'4-5 n: rnnwcnfl',
'14-17 v: kvvvvvvvkvvvvbnvw',
'5-6 h: hhhchhh',
'1-7 d: vmcdddj',
'14-16 n: snnnnnnnnnnmnnnhn',
'11-16 h: hhhhhhvhdhrhhghn',
'3-5 k: lckkknk',
'1-12 t: tcttbpgtdwdxwddrxv',
'1-13 x: jxxxxxxxxxxxfx',
'11-12 l: llllflllllll',
'11-14 p: qpphckzdppkjxz',
'3-16 d: nfngxfjxwdpjvjcds',
'4-5 b: xkbmb',
'11-12 s: sssssssssshs',
'15-17 t: tttttttttttwttttt',
'14-15 x: xxxxxxxxxxxcxxgm',
'3-5 t: wxlttc',
'10-11 x: xxxxxxxxxtk',
'9-12 h: hhhhhhhhdhhhh',
'5-20 d: smdvdkdbqbnsdssfhdnd',
'16-17 d: ddddddddddddddsvtddl',
'6-11 v: kvvvvvvmvvdv',
'2-5 r: nrrgr',
'1-4 b: bbbc',
'8-10 p: ppppptjpspkpppp',
'7-10 w: pjhswvhdjqx',
'11-13 c: cfcfccbcctgnccccvcc',
'8-14 t: tttttttttgtttttts',
'1-4 c: fcccc',
'4-6 v: tvfvvvqvlkrpxkvvhztr',
'3-6 v: vvdvvbv',
'13-15 p: pwppppppppppppp',
'1-2 v: pwbr',
'15-18 r: xrrrbrrrgrpbrprrqrqr',
'2-4 g: zgggp'];