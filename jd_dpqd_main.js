/*
活动名称：批量店铺签到（活动查询）
活动链接：https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=<token>
环境变量：jd_dpqd_tokens // 活动令牌，多个用英文逗号分割

查询活动信息主脚本，自动去重并过滤无效活动，默认过滤垃圾奖品活动
运行后会在本地目录生成缓存文件以用于签到脚本使用，IP限制严重请勿频繁运行

7 7 7 7 *

*/

const $ = new Env('批量店铺签到（活动查询）')
const common = require('./function/jdCommon')
const { H5st } = require('./function/jdCrypto')

var iｉl='jsjiami.com.v7';const lIIl1l11=lI1ilill;(function(lIllIIIi,i1liiI11,IlilllIl,i11iliII,IiIlI1i1,llilllll,i11iIiii){return lIllIIIi=lIllIIIi>>0x2,llilllll='hs',i11iIiii='hs',function(IIiliiII,llIii1,i1i11Ili,I1Ill1lI,IIl11I1i){const lll11I1I=lI1ilill;I1Ill1lI='tfi',llilllll=I1Ill1lI+llilllll,IIl11I1i='up',i11iIiii+=IIl11I1i,llilllll=i1i11Ili(llilllll),i11iIiii=i1i11Ili(i11iIiii),i1i11Ili=0x0;const IIliliII=IIiliiII();while(!![]&&--i11iliII+llIii1){try{I1Ill1lI=parseInt(lll11I1I(0x1a0,'ZNwi'))/0x1*(-parseInt(lll11I1I(0x185,'UzAQ'))/0x2)+parseInt(lll11I1I(0x13b,'zdS8'))/0x3+-parseInt(lll11I1I(0x16b,'nuIJ'))/0x4*(-parseInt(lll11I1I(0x120,'IHsG'))/0x5)+-parseInt(lll11I1I(0x7d,'7VMI'))/0x6+-parseInt(lll11I1I(0x187,'UzAQ'))/0x7*(parseInt(lll11I1I(0xc7,'%*hQ'))/0x8)+-parseInt(lll11I1I(0xc0,']fHC'))/0x9*(parseInt(lll11I1I(0xde,'IHsG'))/0xa)+parseInt(lll11I1I(0x18d,']fHC'))/0xb*(-parseInt(lll11I1I(0x8b,'[4kK'))/0xc);}catch(l11lliii){I1Ill1lI=i1i11Ili;}finally{IIl11I1i=IIliliII[llilllll]();if(lIllIIIi<=i11iliII)i1i11Ili?IiIlI1i1?I1Ill1lI=IIl11I1i:IiIlI1i1=IIl11I1i:i1i11Ili=IIl11I1i;else{if(i1i11Ili==IiIlI1i1['replace'](/[TltuCXBdfKYRWreyIkN=]/g,'')){if(I1Ill1lI===llIii1){IIliliII['un'+llilllll](IIl11I1i);break;}IIliliII[i11iIiii](IIl11I1i);}}}}}(IlilllIl,i1liiI11,function(il1iIlIl,i11IilII,i11IliIi,liIliili,II11il,Illllii,Il11iIii){return i11IilII='\x73\x70\x6c\x69\x74',il1iIlIl=arguments[0x0],il1iIlIl=il1iIlIl[i11IilII](''),i11IliIi=`\x72\x65\x76\x65\x72\x73\x65`,il1iIlIl=il1iIlIl[i11IliIi]('\x76'),liIliili=`\x6a\x6f\x69\x6e`,(0x15a2c2,il1iIlIl[liIliili](''));});}(0x308,0x8cea1,I1l1l,0xc4),I1l1l)&&(iｉl=lIIl1l11(0x8f,'S!7X'));let tokensList=(process[lIIl1l11(0x113,'yV0a')][lIIl1l11(0x70,'6%K!')]||'')[lIIl1l11(0x17b,'%*hQ')](',')||[],TokensMap=null;const CacheFile=__dirname+lIIl1l11(0xdd,'Vsgd');!(async()=>{const IIlil1I1=lIIl1l11,ilIlIiii={'kGDrM':function(IliIiI){return IliIiI();}};await ilIlIiii[IIlil1I1(0x178,'ruz(')](Main);})()[lIIl1l11(0xe8,'nuIJ')](lllI11Il=>$[lIIl1l11(0x123,']!Xb')](lllI11Il))[lIIl1l11(0xba,'e6rm')](()=>$[lIIl1l11(0x1a8,'Q)b#')]());async function Main(){const li1Iili1=lIIl1l11,ll1l1lIl={'sjeJt':li1Iili1(0x7a,'UzAQ'),'uCJFA':function(IlI1iIIl,ill1iIIi){return IlI1iIIl>ill1iIIi;},'TURTd':function(liiliIli,iillIII){return liiliIli<=iillIII;},'goaoU':function(I11i1ii,Il1I1li){return I11i1ii!==Il1I1li;},'BLzIk':li1Iili1(0x8e,'uj6e'),'eUvFz':li1Iili1(0x9d,'Q)b#'),'IuvPx':function(iiiiilI1,II1Illl){return iiiiilI1===II1Illl;},'rFvXf':li1Iili1(0x127,'4v3a'),'qrUrQ':li1Iili1(0x73,'%*hQ'),'QNIke':function(lli1l1il,ilIlIilI){return lli1l1il/ ilIlIilI;},'NZyFV':function(lIlIllli,Iiii1iil){return lIlIllli<Iiii1iil;},'pouoQ':li1Iili1(0x1b1,'Yzvn'),'mRXoY':li1Iili1(0xfe,'Y7tV'),'oYykW':function(Iiii1Ill,i1l1lIl1){return Iiii1Ill(i1l1lIl1);},'mWQOn':li1Iili1(0xb2,'Vsgd'),'jVyXN':li1Iili1(0xe4,'uj6e'),'vZHcR':function(I1lIIIIi,iIill1I){return I1lIIIIi===iIill1I;},'ELjAG':li1Iili1(0x164,'PUyY'),'ZlKCy':li1Iili1(0x13c,'*[uW'),'OWjgk':li1Iili1(0x9b,'$KU!'),'hCiQi':function(i1illlll,lIl1IiI){return i1illlll===lIl1IiI;},'xPXFi':li1Iili1(0x169,'z4wX'),'rOCDj':function(liiiIlll,lliiiIiI){return liiiIlll/lliiiIiI;},'SpudF':li1Iili1(0xda,'uj6e'),'GADYg':function(llIilli,Il1I1ill){return llIilli>Il1I1ill;},'hZHvh':li1Iili1(0x72,'hTMy'),'FzLuz':li1Iili1(0x1a3,'[4kK'),'Xaxdi':li1Iili1(0x9e,'7VMI'),'oBErx':function(IIliIiiI,iiIiliII){return IIliIiiI>iiIiliII;},'UBkhU':function(i1Iiiii,lilIll11){return i1Iiiii!==lilIll11;},'GZQQU':li1Iili1(0x157,'ePWs'),'rOFKK':li1Iili1(0xe3,'Q)b#'),'ocuWU':li1Iili1(0x131,'ze)X'),'ZJfQQ':li1Iili1(0xae,'TMB^'),'VIDFr':li1Iili1(0x12f,']UsX'),'cBHBn':function(i1iliIlI,li1IIl1i){return i1iliIlI(li1IIl1i);},'WPOkU':li1Iili1(0xc6,'$KU!')};try{if(ll1l1lIl[li1Iili1(0x149,'PUyY')](tokensList[li1Iili1(0x87,'ze)X')],0x0))tokensList=[...new Set(tokensList[li1Iili1(0x1b2,']UsX')](i11iilI=>i11iilI!==''))];if(ll1l1lIl[li1Iili1(0x11b,'ruz(')](tokensList[li1Iili1(0x14e,'Lq7m')],0x0)){if(ll1l1lIl[li1Iili1(0x14d,'ze)X')](ll1l1lIl[li1Iili1(0x167,'IHsG')],ll1l1lIl[li1Iili1(0x154,'$KU!')])){console[li1Iili1(0x193,'Vsgd')](ll1l1lIl[li1Iili1(0x12b,'ePWs')]);return;}else Iliill1i[li1Iili1(0xcc,'xWPv')](llIliI1i),l1iiilii=![];}TokensMap=new Map(tokensList[li1Iili1(0xe5,']UsX')]((iIIi1iii,ilIlilI)=>[iIIi1iii,{'index':ilIlilI+0x1,'venderId':'','activityId':'','isValid':!![],'rules':[]}]));const iIllI1li=[];console[li1Iili1(0xa8,'M1XK')]('');for(const l111liiI of tokensList){if(ll1l1lIl[li1Iili1(0xf2,'M1XK')](ll1l1lIl[li1Iili1(0x1b5,'ZNwi')],ll1l1lIl[li1Iili1(0x190,'swor')]))ii1ilii1[li1Iili1(0x171,'6%K!')](li1Iili1(0x16a,'hTMy')+II1iil1I);else{let lI11I1I=!![];$[li1Iili1(0xd4,'KTUE')]=Math[li1Iili1(0x197,'IY$i')](ll1l1lIl[li1Iili1(0x137,'Npz@')](Date[li1Iili1(0x189,'Yzvn')](),0x3e8))+li1Iili1(0xbe,'ze)X'),$[li1Iili1(0xc3,'wzJE')]=l111liiI;let I1l1iliI=0x0;$[li1Iili1(0xcd,'M1XK')]='';while(!$[li1Iili1(0xee,'*[uW')]&&ll1l1lIl[li1Iili1(0xdb,'zdS8')](I1l1iliI,0x5)){ll1l1lIl[li1Iili1(0x199,'$KU!')](ll1l1lIl[li1Iili1(0x144,']UsX')],ll1l1lIl[li1Iili1(0xca,'6%K!')])?($[li1Iili1(0xb4,'@$j!')]='',await ll1l1lIl[li1Iili1(0xa9,'8xtn')](sendRequest,ll1l1lIl[li1Iili1(0x14b,'6%K!')]),await $[li1Iili1(0x176,'Q)b#')](0x3e8)):Il11liii[li1Iili1(0xcb,'#*Jo')]=lllI1lIl[li1Iili1(0xb6,'#*Jo')];}const I1lliIlI=$[li1Iili1(0xb1,'xWPv')][li1Iili1(0x76,'hTMy')],liilli1l=$[li1Iili1(0x15d,'swor')]['id'],Il1li1l1=$[li1Iili1(0x124,'IHsG')][li1Iili1(0xe0,'*[uW')],i1i1iIIi=$[li1Iili1(0xff,'UzAQ')][li1Iili1(0x134,'e6rm')]||[],il1l111i=$[li1Iili1(0x135,'zdS8')][li1Iili1(0xbc,'ruz(')],Ii1I1111=$[li1Iili1(0x135,'zdS8')][li1Iili1(0x10c,'[4kK')],I1IiiIli=$[li1Iili1(0x15f,'e6rm')](ll1l1lIl[li1Iili1(0x138,'ZNwi')],il1l111i),ll1lll1I=$[li1Iili1(0x165,'hTMy')](ll1l1lIl[li1Iili1(0xf6,'7VMI')],Ii1I1111),iiII1lil=Date[li1Iili1(0x1aa,'4v3a')]();il1l111i&&ll1l1lIl[li1Iili1(0x122,']!Xb')](iiII1lil,il1l111i)&&(console[li1Iili1(0x148,'IHsG')]('['+l111liiI+li1Iili1(0x82,'P5Sh')+I1IiiIli+li1Iili1(0x155,'PUyY')),iIllI1li[li1Iili1(0x11c,'vedk')](l111liiI),lI11I1I=![]);if(Ii1I1111&&ll1l1lIl[li1Iili1(0xc1,'yV0a')](iiII1lil,Ii1I1111))console[li1Iili1(0x12a,'e6rm')]('['+l111liiI+li1Iili1(0x15e,'$KU!')+ll1lll1I+li1Iili1(0xa4,'hTMy')),iIllI1li[li1Iili1(0x17e,'yV0a')](l111liiI),lI11I1I=![];else ll1l1lIl[li1Iili1(0xbb,'IY$i')](Il1li1l1,0x3)&&(console[li1Iili1(0xad,'wzJE')]('['+l111liiI+li1Iili1(0x84,'Yzvn')),iIllI1li[li1Iili1(0x116,'KTUE')](l111liiI),lI11I1I=![]);let liIIil1i=![];const IIll1I=[];for(const llii1ili of i1i1iIIi){if(ll1l1lIl[li1Iili1(0x6f,'*[uW')](ll1l1lIl[li1Iili1(0x1ad,'zdS8')],ll1l1lIl[li1Iili1(0x179,']UsX')]))lI1I1I1[li1Iili1(0xc9,'nuIJ')]('【'+Il1lIlIi+'】\x0a'+iiliIiI1[li1Iili1(0x7b,'Npz@')](lllliIiI=>li1Iili1(0x125,'4v3a')+lllliIiI[li1Iili1(0xd1,'uj6e')]+'天：'+lllliIiI[li1Iili1(0x132,'S!7X')][li1Iili1(0x80,'z4wX')]('，'))[li1Iili1(0x96,'ePWs')]('\x0a')+'\x0a');else{const lIll1il=llii1ili[li1Iili1(0x168,'nuIJ')],l1iI11l1=llii1ili[li1Iili1(0x14c,'S!7X')]||[],iiilill1=[];for(const i1Iii1Ii of l1iI11l1){if(ll1l1lIl[li1Iili1(0xf8,'swor')](ll1l1lIl[li1Iili1(0x196,'4v3a')],ll1l1lIl[li1Iili1(0x121,'nuIJ')])){let liIi1l1l='';const l1i1IliI=i1Iii1Ii[li1Iili1(0xe7,'6%K!')],li1i1IiI=i1Iii1Ii[li1Iili1(0xfa,'z&uQ')],iI1lllIi=i1Iii1Ii[li1Iili1(0xd2,'nuIJ')],IiIliil1=i1Iii1Ii[li1Iili1(0x1ae,'ruz(')],il1I1III=ll1l1lIl[li1Iili1(0x191,'[4kK')](IiIliil1,0x5);switch(li1i1IiI){case 0x1:liIi1l1l=ll1l1lIl[li1Iili1(0x75,'PUyY')];break;case 0x4:liIi1l1l=l1i1IliI+li1Iili1(0xd8,'@$j!');break;case 0x6:liIi1l1l=l1i1IliI+li1Iili1(0x92,'nuIJ');break;case 0x9:liIi1l1l=iiilill1?.[li1Iili1(0x159,'Yzvn')][0x0]?.[li1Iili1(0x95,'f34Z')]+'🎁';break;case 0xa:liIi1l1l=l1i1IliI+li1Iili1(0x8c,']UsX');break;case 0xe:liIi1l1l=ll1l1lIl[li1Iili1(0x99,'#*Jo')](l1i1IliI,0x64)+li1Iili1(0x162,'6%K!');break;default:liIi1l1l=li1Iili1(0x188,'7#c%')+li1i1IiI+'）';}if(![0x1,0x6][li1Iili1(0x89,'9Mtn')](li1i1IiI)&&!il1I1III)liIIil1i=!![];iiilill1[li1Iili1(0x111,'Y7tV')](liIi1l1l+'（共'+iI1lllIi+'份'+(il1I1III?ll1l1lIl[li1Iili1(0x170,'f34Z')]:'')+'）');}else iIlIIil1[li1Iili1(0xaf,'9Mtn')]('❓'+IIlilil1+'\x20'+iil1ilI[li1Iili1(0x140,']fHC')](Ilii1ii));}IIll1I[li1Iili1(0x151,']!Xb')]({'days':lIll1il,'prize':iiilill1,'havePrize':liIIil1i});}}ll1l1lIl[li1Iili1(0x1b4,'hTMy')](IIll1I[li1Iili1(0xcf,'f34Z')],0x0)&&(ll1l1lIl[li1Iili1(0x9f,'PUyY')](ll1l1lIl[li1Iili1(0xea,'S!7X')],ll1l1lIl[li1Iili1(0x1a6,'Npz@')])?I11I11ll[li1Iili1(0xad,'wzJE')](li1Iili1(0x100,'TMB^')+iIIiilli[li1Iili1(0x177,']UsX')]):console[li1Iili1(0x163,'PUyY')]('【'+l111liiI+'】\x0a'+IIll1I[li1Iili1(0x91,'jkTi')](IIiI1ill=>li1Iili1(0x119,'S!7X')+IIiI1ill[li1Iili1(0xe6,'ePWs')]+'天：'+IIiI1ill[li1Iili1(0xc8,'z4wX')][li1Iili1(0x96,'ePWs')]('，'))[li1Iili1(0xf0,']!Xb')]('\x0a')+'\x0a'));!liIIil1i&&(ll1l1lIl[li1Iili1(0x145,'ePWs')](ll1l1lIl[li1Iili1(0x136,'8xtn')],ll1l1lIl[li1Iili1(0x160,'vedk')])?(I1Illll[li1Iili1(0x126,']UsX')]('['+iIllIl1I+li1Iili1(0xac,'8xtn')),iiIi1lIl[li1Iili1(0x142,'7VMI')](Il11lll),lIiIlI1l=![]):(iIllI1li[li1Iili1(0xc4,']UsX')](l111liiI),lI11I1I=![]));const ililiIi1=TokensMap[li1Iili1(0xf3,'Q)b#')](l111liiI);ililiIi1[li1Iili1(0x16c,'KTUE')]=I1lliIlI,ililiIi1[li1Iili1(0xa5,'PUyY')]=liilli1l,ililiIi1[li1Iili1(0x71,'nuIJ')]=lI11I1I,ililiIi1[li1Iili1(0x19a,'Yzvn')]=IIll1I,TokensMap[li1Iili1(0x158,'UzAQ')](l111liiI,ililiIi1);}}if(ll1l1lIl[li1Iili1(0x12c,'M1XK')](iIllI1li[li1Iili1(0x18c,'6%K!')],0x0)){if(ll1l1lIl[li1Iili1(0x130,'%*hQ')](ll1l1lIl[li1Iili1(0x181,'IY$i')],ll1l1lIl[li1Iili1(0x15c,'Q)b#')])){console[li1Iili1(0x17c,'[4kK')](ll1l1lIl[li1Iili1(0x13d,'7VMI')]);for(const llIll1I of iIllI1li){ll1l1lIl[li1Iili1(0xd5,'zdS8')](ll1l1lIl[li1Iili1(0x6e,'nuIJ')],ll1l1lIl[li1Iili1(0xa7,'ze)X')])?console[li1Iili1(0x85,'Yzvn')](llIll1I):(iilli1il[li1Iili1(0x88,'iDlS')]('['+I111llil+li1Iili1(0x11e,'$KU!')+I1I1lII+li1Iili1(0x11d,'Q)b#')),liI11IIl[li1Iili1(0x182,'TMB^')](Ii1lIiil),iilil1i=![]);}}else{ill1I1Il[li1Iili1(0x13a,'#*Jo')](ll1l1lIl[li1Iili1(0x12b,'ePWs')]);return;}}const I1lii1I1=Object[li1Iili1(0x86,'P5Sh')](TokensMap),IiiiIl=ll1l1lIl[li1Iili1(0x172,'e6rm')](require,'fs');IiiiIl[li1Iili1(0xb3,'%*hQ')](CacheFile,JSON[li1Iili1(0xfc,'$KU!')](I1lii1I1)),console[li1Iili1(0x156,'$KU!')](ll1l1lIl[li1Iili1(0xd3,']UsX')]);}catch(liI11lII){console[li1Iili1(0xa6,'7#c%')](li1Iili1(0x1a7,'Vsgd')+liI11lII);}}async function handleResponse(il1IiII1,ii1IlliI){const I1lIIiIi=lIIl1l11,ii11i1il={'chpoc':function(l1IlIlI,IilIiii1){return l1IlIlI===IilIiii1;},'WRunQ':I1lIIiIi(0x18e,'6%K!'),'PnKkZ':I1lIIiIi(0x78,'nuIJ'),'NIGAW':function(IlIIi1Il,Ilii1i){return IlIIi1Il===Ilii1i;}};try{if(ii11i1il[I1lIIiIi(0x10b,'TMB^')](ii11i1il[I1lIIiIi(0x8a,'[4kK')],ii11i1il[I1lIIiIi(0x102,'9Mtn')]))switch(il1IiII1){case ii11i1il[I1lIIiIi(0x112,'UzAQ')]:if(ii11i1il[I1lIIiIi(0x198,'@$j!')](ii1IlliI[I1lIIiIi(0x143,'uj6e')],0xc8)&&ii11i1il[I1lIIiIi(0x184,'7VMI')](ii1IlliI[I1lIIiIi(0x12d,'7VMI')],!![])&&ii1IlliI[I1lIIiIi(0xdf,'TMB^')])$[I1lIIiIi(0xee,'*[uW')]=ii1IlliI[I1lIIiIi(0x94,'PUyY')];else ii1IlliI[I1lIIiIi(0x1a5,'yV0a')]?console[I1lIIiIi(0x18f,'S!7X')](I1lIIiIi(0xb5,'PUyY')+ii1IlliI[I1lIIiIi(0x18a,']!Xb')]):console[I1lIIiIi(0x7f,']fHC')]('❓'+il1IiII1+'\x20'+JSON[I1lIIiIi(0xdc,'Vsgd')](ii1IlliI));break;}else lililIl[I1lIIiIi(0x93,'P5Sh')](i1Ii1lll,lilllil1);}catch(l1IlIlIi){console[I1lIIiIi(0x117,'Y7tV')](I1lIIiIi(0xbd,'%*hQ')+il1IiII1+I1lIIiIi(0xeb,'jkTi')+(l1IlIlIi[I1lIIiIi(0x153,'4v3a')]||l1IlIlIi));}}async function sendRequest(I1ll1IlI){const liIil1Ii=lIIl1l11,llllliII={'GNCGC':liIil1Ii(0xa2,'#*Jo'),'FbiKG':function(lIll1ii1,i11lllI1){return lIll1ii1!==i11lllI1;},'CeYgR':liIil1Ii(0x77,'z4wX'),'ndwtA':liIil1Ii(0xa3,'7#c%'),'wWwJd':liIil1Ii(0x7c,'jkTi'),'OfcXT':liIil1Ii(0xb0,'hTMy'),'kxWYg':liIil1Ii(0xef,'0NtK'),'PNIbZ':function(liIlilli,III1IllI){return liIlilli(III1IllI);},'UkspE':liIil1Ii(0x8d,'vedk'),'NhOcq':liIil1Ii(0x1b3,']UsX'),'kKsUl':liIil1Ii(0xb9,'UzAQ'),'COxle':liIil1Ii(0x1b6,']UsX'),'QmPJj':liIil1Ii(0xf5,'hTMy'),'qcmzm':liIil1Ii(0x79,'hTMy'),'FgqBa':liIil1Ii(0x9a,'8xtn'),'DPrFH':liIil1Ii(0x1a4,'wzJE'),'dJDMZ':liIil1Ii(0x186,'@$j!'),'CwDYc':liIil1Ii(0x83,'7VMI'),'KZKts':liIil1Ii(0xec,'[4kK'),'LqtOI':liIil1Ii(0xbf,'#*Jo'),'mlKly':liIil1Ii(0x150,'7#c%'),'JXkLf':liIil1Ii(0x13e,'*[uW'),'uQqDR':function(Il1l1liI,Ii1iiiIl){return Il1l1liI===Ii1iiiIl;},'uCGWx':function(i1lIii1I,I1ilIilI){return i1lIii1I!==I1ilIilI;},'pCExI':liIil1Ii(0x16e,'Yzvn'),'VvGli':liIil1Ii(0x10a,'KTUE'),'dNuCT':function(iiii1II1,Iii1iiI1){return iiii1II1<Iii1iiI1;},'jMwQN':function(lliI1il1,ilIiilII){return lliI1il1>ilIiilII;},'ohZrS':function(Iiillii1,iI111ll){return Iiillii1===iI111ll;},'XoORr':liIil1Ii(0x106,'zdS8'),'NzUcg':liIil1Ii(0xe1,'Yzvn'),'Zemsd':function(iiIi11ii,IlliIi1I,II1iIIII){return iiIi11ii(IlliIi1I,II1iIIII);},'Fbest':function(llii11I1,iiiliii){return llii11I1>=iiiliii;},'cOPAx':liIil1Ii(0xb7,'7VMI'),'pdVxh':liIil1Ii(0x118,']fHC')};if($[liIil1Ii(0x195,'KTUE')])return;let l1l111ii='',Il1I1i=null,lili1il=null,IIliiIi=llllliII[liIil1Ii(0xaa,']fHC')],iIIIlIi1={},I111iii1={};switch(I1ll1IlI){case llllliII[liIil1Ii(0xd9,'uj6e')]:I111iii1={'appId':llllliII[liIil1Ii(0x74,'7#c%')],'functionId':llllliII[liIil1Ii(0x133,'ruz(')],'appid':llllliII[liIil1Ii(0x10f,'ruz(')],'body':{'token':$[liIil1Ii(0xfd,'ePWs')],'venderId':llllliII[liIil1Ii(0x19f,'7VMI')](parseInt,$[liIil1Ii(0x146,'wzJE')])||''},'version':llllliII[liIil1Ii(0xf1,'TMB^')],'ua':$['UA']},iIIIlIi1=await H5st[liIil1Ii(0x128,'vedk')](I111iii1),l1l111ii=llllliII[liIil1Ii(0x97,'Yzvn')],lili1il=Object[liIil1Ii(0xf9,'IHsG')]({},iIIIlIi1[liIil1Ii(0x104,'z4wX')],{'jsonp':llllliII[liIil1Ii(0xfb,'8xtn')]});break;default:console[liIil1Ii(0xf4,'P5Sh')](liIil1Ii(0x114,'wzJE')+I1ll1IlI);return;}const iiIl1i11={'t':$[liIil1Ii(0x141,'IHsG')],'loginType':'2'};if(Il1I1i){if(llllliII[liIil1Ii(0x11f,'ze)X')](llllliII[liIil1Ii(0x1b0,'swor')],llllliII[liIil1Ii(0x1a2,'z&uQ')])){I1iI1iIl[liIil1Ii(0xa6,'7#c%')](llllliII[liIil1Ii(0x192,'ePWs')]);for(const Il1liIIi of liilllIl){iii1ii[liIil1Ii(0x88,'iDlS')](Il1liIIi);}}else Object[liIil1Ii(0x147,']!Xb')](Il1I1i,iiIl1i11);}lili1il&&Object[liIil1Ii(0x19c,'8xtn')](lili1il,iiIl1i11);const l11lIl1i={'url':l1l111ii,'method':IIliiIi,'headers':{'Accept':llllliII[liIil1Ii(0x11a,'0NtK')],'Accept-Encoding':llllliII[liIil1Ii(0x105,'PUyY')],'Accept-Language':llllliII[liIil1Ii(0x1a1,'Q)b#')],'Connection':llllliII[liIil1Ii(0x19e,'yV0a')],'Content-Type':llllliII[liIil1Ii(0x17d,'4v3a')],'Host':llllliII[liIil1Ii(0x16f,']!Xb')],'Referer':llllliII[liIil1Ii(0x107,'Yzvn')],'Sec-Fetch-Dest':llllliII[liIil1Ii(0x15a,'iDlS')],'Sec-Fetch-Mode':llllliII[liIil1Ii(0xd7,'M1XK')],'Sec-Fetch-Site':llllliII[liIil1Ii(0x1ab,'Q)b#')],'User-Agent':liIil1Ii(0x6d,'xWPv')+Date[liIil1Ii(0x161,'@$j!')]()+liIil1Ii(0x115,'M1XK')},'params':lili1il,'data':Il1I1i,'timeout':0x7530,'httpsTlsOptions':common[liIil1Ii(0x166,'4v3a')]()};llllliII[liIil1Ii(0xd0,'M1XK')](IIliiIi,llllliII[liIil1Ii(0xf7,']UsX')])&&(llllliII[liIil1Ii(0x10d,'ruz(')](llllliII[liIil1Ii(0x17a,'xWPv')],llllliII[liIil1Ii(0x180,'#*Jo')])?IliIilIl[liIil1Ii(0x163,'PUyY')](lliliii1):(delete l11lIl1i[liIil1Ii(0x1af,'ze)X')],delete l11lIl1i[liIil1Ii(0x109,'vedk')][llllliII[liIil1Ii(0xc5,'%*hQ')]]));const lIlIIl1l=0x1;let iii1lIll=0x0,lilii1II=null,ll1l1ll1=null;while(llllliII[liIil1Ii(0x14a,'ruz(')](iii1lIll,lIlIIl1l)){llllliII[liIil1Ii(0xe9,'M1XK')](iii1lIll,0x0)&&(llllliII[liIil1Ii(0x139,'e6rm')](llllliII[liIil1Ii(0x174,'jkTi')],llllliII[liIil1Ii(0x15b,'ePWs')])?lIli1li1[liIil1Ii(0xe2,'KTUE')](liIil1Ii(0x18b,']UsX')+iiliii1+liIil1Ii(0x110,'yV0a')+(i11IlIII[liIil1Ii(0xa1,'IY$i')]||iIiIIliI)):await $[liIil1Ii(0x16d,'@$j!')](0x7d0));const Iii1Il1I=await common[liIil1Ii(0xd6,'4v3a')](l11lIl1i);if(!Iii1Il1I[liIil1Ii(0x19b,'Npz@')]){ll1l1ll1=Iii1Il1I[liIil1Ii(0x108,'P5Sh')],lilii1II=liIil1Ii(0x12e,'nuIJ')+I1ll1IlI+liIil1Ii(0xab,'%*hQ')+Iii1Il1I[liIil1Ii(0x90,'zdS8')],iii1lIll++;continue;}if(!Iii1Il1I[liIil1Ii(0x14f,'7VMI')]){lilii1II=liIil1Ii(0x103,'Npz@')+I1ll1IlI+liIil1Ii(0x19d,'Y7tV'),iii1lIll++;continue;}await llllliII[liIil1Ii(0x81,'jkTi')](handleResponse,I1ll1IlI,Iii1Il1I[liIil1Ii(0xb8,'Npz@')]),ipBlack=![];break;}llllliII[liIil1Ii(0x101,']!Xb')](iii1lIll,lIlIIl1l)&&(llllliII[liIil1Ii(0x13f,'6%K!')](llllliII[liIil1Ii(0x194,'jkTi')],llllliII[liIil1Ii(0x1a9,'nuIJ')])?llllliII[liIil1Ii(0x175,'*[uW')](ll1l1ll1,0x193)&&console[liIil1Ii(0x163,'PUyY')](lilii1II):llllliII[liIil1Ii(0x129,'Yzvn')](il1i1lII,0x193)&&i1l1I1[liIil1Ii(0xad,'wzJE')](lIiiiIII));}function lI1ilill(_0x31b7e7,_0x35099d){const _0x5702db=I1l1l();return lI1ilill=function(_0x555043,_0x170934){_0x555043=_0x555043-0x6d;let _0x39d3d0=_0x5702db[_0x555043];if(lI1ilill['wNpYEK']===undefined){var _0x1eee4a=function(_0x512797){const _0x2fd9f7='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1c6a0d='',_0x8bab35='';for(let _0x539318=0x0,_0x33b41c,_0x13d7c6,_0x5843ef=0x0;_0x13d7c6=_0x512797['charAt'](_0x5843ef++);~_0x13d7c6&&(_0x33b41c=_0x539318%0x4?_0x33b41c*0x40+_0x13d7c6:_0x13d7c6,_0x539318++%0x4)?_0x1c6a0d+=String['fromCharCode'](0xff&_0x33b41c>>(-0x2*_0x539318&0x6)):0x0){_0x13d7c6=_0x2fd9f7['indexOf'](_0x13d7c6);}for(let _0x364164=0x0,_0x5cf640=_0x1c6a0d['length'];_0x364164<_0x5cf640;_0x364164++){_0x8bab35+='%'+('00'+_0x1c6a0d['charCodeAt'](_0x364164)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x8bab35);};const _0x5867b4=function(_0x39330f,_0x105cf1){let _0x294fc6=[],_0xd58639=0x0,_0x1b938e,_0x496991='';_0x39330f=_0x1eee4a(_0x39330f);let _0x852bc6;for(_0x852bc6=0x0;_0x852bc6<0x100;_0x852bc6++){_0x294fc6[_0x852bc6]=_0x852bc6;}for(_0x852bc6=0x0;_0x852bc6<0x100;_0x852bc6++){_0xd58639=(_0xd58639+_0x294fc6[_0x852bc6]+_0x105cf1['charCodeAt'](_0x852bc6%_0x105cf1['length']))%0x100,_0x1b938e=_0x294fc6[_0x852bc6],_0x294fc6[_0x852bc6]=_0x294fc6[_0xd58639],_0x294fc6[_0xd58639]=_0x1b938e;}_0x852bc6=0x0,_0xd58639=0x0;for(let _0x31d562=0x0;_0x31d562<_0x39330f['length'];_0x31d562++){_0x852bc6=(_0x852bc6+0x1)%0x100,_0xd58639=(_0xd58639+_0x294fc6[_0x852bc6])%0x100,_0x1b938e=_0x294fc6[_0x852bc6],_0x294fc6[_0x852bc6]=_0x294fc6[_0xd58639],_0x294fc6[_0xd58639]=_0x1b938e,_0x496991+=String['fromCharCode'](_0x39330f['charCodeAt'](_0x31d562)^_0x294fc6[(_0x294fc6[_0x852bc6]+_0x294fc6[_0xd58639])%0x100]);}return _0x496991;};lI1ilill['sJahAc']=_0x5867b4,_0x31b7e7=arguments,lI1ilill['wNpYEK']=!![];}const _0x497a3d=_0x5702db[0x0],_0x3bc43f=_0x555043+_0x497a3d,_0x1c4713=_0x31b7e7[_0x3bc43f];return!_0x1c4713?(lI1ilill['YPvrAW']===undefined&&(lI1ilill['YPvrAW']=!![]),_0x39d3d0=lI1ilill['sJahAc'](_0x39d3d0,_0x170934),_0x31b7e7[_0x3bc43f]=_0x39d3d0):_0x39d3d0=_0x1c4713,_0x39d3d0;},lI1ilill(_0x31b7e7,_0x35099d);}function I1l1l(){const I11i1lli=(function(){return[...[iｉl,'TCXjsfeKjkiTrarBImi.WRcYRoNdmle.tuvyRB7T==','W4RcKmoPtW','W67LVjNLPPVVVzVMMk7NGBZLHjdMNORLKjTT','Bo+8U+A3QUwiRowWPEwDGSkh','AG0rWQJdJq','WQldHSk0W6ddTG0zWRFcSmks','zCoDW5SKha','W7VdKSofW6tcSa','W5NdP8oBW6FcLba','W7hcLCoZWPhdJXmfWPVcTmkKnSk5WRNcKGC','6lYp57Ip566K5yIW','f8kaoW','WQdcM8k5r30','W53cGmoUB8oRwLu','yJr9laK','W6hcHsm','ACk2W58rqa','W5RdQCoPbXi','qSkxW5NcNmoCeSk3','8jw4OCkr','hmkUm8kwWO4','CeJdVCoUW5m','5BUw6k+b56Ad6zQh55Io5RAF5yM6772PW4e','WQRdJhFcIH0','W6VcGSo6zY0','W67cHsRdOWBcL8olW5WSnCoEDrdcGNddO33dH3Peha','cqWVWP88W7xcQvfcWQuGWOxcSmkyWOC','W4T2l8kzWRW','wCkZlGtcOG','kCkVW7ZcTmk+','W6lcGH7dPtW','aNLM','x11IW6XUWRBdTL1JWRi2WPNcIq','mvb7WQ7dSG','xSkbW4/cQmoS','dhbMWOpcUetdQXS7W6NdIW','hweqWP8H','WP0/c8kgW5SWza7cLG','W6lcMCoQWRxdVXmnWOdcRq','qCkxW4NcLW','W7GrWQZcHq','c8kakCkJWQW','FCkZW5S0yq','WOJdJftdNXq1W6BcUq','W5tdU8opW4VcGqW','W7RcN8oG','mCkGiGVdMW','W4dcQSoSFc0','nLqOWPSi','WQRdJhFcIH0Kut3cVW','sWazWOZdNW','W7rtW5lcVN7cKa','vCkdW47cNG','oaZdS2ZdSKpdQq','W4xdVCopW4O','pSoeur3cS8oOECo/da','WRZcH8kPC1RcSCom','vhtcP8ocwq','zow/O+wMO++9GEABGoEaQUwfMEAEV+wrQv8','xu7cTG','FSkeW5Gzqa','W7CuWO0','ttHGaJZcHW0frcBcNKTGedVdVSk9W6hdVti','WR/dISoWWPXO','vmkMW684uW','WRXwfHW/','bIxdMmkVW7ddI0G/WQ7cVcW+WRxdPHy','Bo+8U+A3QUwiRow3KEs7Pmkh','W7NcGYNdSG','W6lcHmoIq8k3','WQ/cPCkE','5ysy57QH5y288yQMGq','kmkmdW','hmkAiYtdSW','WO/dN8kYW6S','WQtcKCk/quVcPSo9W5pcVG','W5tcVmo9WPNdHW','rSoVW4CMgW','5lYX5OoR5yI48k+NSU+7Ia','4P63WPBOH4xMNQlOVRtOO67PGzZLIiNKUQ3PLkFOR7KV','hSk9WOzXaq7dPmoLW7tcOW','j1/cPCk3d0tcUSo7','WRBcQ8kalq','tIngkJG','W7BdV8o4W7VcHq','lvGwkIC','n2WE','W67cQaZdLqe','t8oyASo8WQ8/cmkbW70g','W6/cICoVwCkN','oxnIWQ3dKG','WRL4osm','fSkCoW','W4/cO8oDttq','iCkdf8kpWOq','s8kZdGpdLq','vNRdUSoVW7i','qeDT','WRxcQmkEtwe','W79hWRpcVG','zqZdUmoJmfZcHSofl8kz','hLveaaK','W4KZWOlcL8ka','FSkun2e','W4ZcKqpcJ0jZW7/cJ8kHW5CVqa','uSkkW4RcKmoA','WRy5WP7cL8khCMy','WRxcR8krlsStnqxcVgS','WRvaW4NdHSoWmIzvzmo0B8obxW','5P28556g5AAi5zoo776v'],...(function(){return[...['sJLJ','W5JdU8oB','4PY3W4/MNBBOGlhMRP7NOlxLPBxNK67cRW','n2yxWRmswW','W5H/s8oDWOWrFZhcO8oqga','iKyQWROm','WRBdKxK','edldUCkCW4i','rgTJxSk8','xCksW7KCDW','WQmwW7e','W5tcQCoWsSkT','i0/cPCkwbfi','WP7cTCkWz1a','W6GfWRZcQCkN','WO/cG8kUgfm','vK7cSmoRDG','vIn4aJ0','E8kibaZcOSo0xG','W7jKjmkuWRjI','W7NORyxMSkRLPjlOT5bk4PY+u+AuV+wtKow5LEAxLEAoPW','W4TIWRlcKmks','yCkSW7pcNCoJ','CSomWRBdLmobWOHAW6ldHI1xjW','WOH+iruv','W6TcdG5g','BMrmBCk7','WPxdJf/dI1WMW4pcTmk0W74','W6jbWQC','tSkhkXRcVq','4P6dwEIgJoADKoI9QUIITUMaUUwjNUs5REMwJ+IVVYa','WQP2pJi','wSoUW6C7hW','WR/cJCkT','WOrboXSs','WQiJBSopW6q7cmoDWOrMW5FcHCoi','kYuXWP8y','W5FcKmo4sWXL','sa4mWOi','iG/dLmkcW7y','tHTfmse','hCkgmmk4WPGP','e8kBkmk8WO5HxSohW64xfmkDW6GgcCkJlCoaag3cPHW7tW','WRZdT8kBW5Cd','mCk/W7pcTmkw','e8kgf8kNWP8','uCkukGVdRmoDtmomWP98W4OtWR/dKJhcPSojWQ/dSNZdUfLvWPRdMtL7tSkssxtcTYS9mmkWW4T5W6OBWOhdKdGkAaugmMfNqHKqWPayF3uDsmooWPFdR0hdOxDNWQLAW7lcJ8ocWRDVWPiIbCk3wICsD8kIoSkKWQH1armpWO7cHSoGDmkPW60zcI3dGSoNnMaBtbviyKddRHi+W5/dLadcRCkxWPlcNNVcSw4rDmoWW6LGWOPYWP5ZsuxdVCoWW5JdVCkndCkbdCk6ch3dLSkGsComWR06W69CvCkvxmkFuCk5bsJdTmobW4NdPSoBWQxcSCoUWPf8WRhcUmkiWQerW5/cGslcT18tW4nmWQ7dKtJcKftdHSkTW71elL8sW5/dQSooDmo9WPbXz8kpW6NdNfH9uu/cPCk2W7tdOWxdRCkCfSoWburyBraJWOxdTq97gg/dUqNcN37dLSoWvSoxW7bLhSkfWPOHkvu','CmoaW5CsjG','cuTdWOxdHW','mwCMWRawqHxdVmoXW4evWPS1WRC','q8o5W6CIgZBdTW','WPNdLCksW7Cd','CfddKCoXW6O','ittcQuxdUq','pmkZmaVdSW','WO3dK8kXW6ObW5bsxq','BK5u','tCoVW4ucfcVdUSoGW5hcKaTyWQ1wWRe','WPZdJmk2W75iWOj/xe1sD1hcHstdSwCt','4PIKuEISJUwgUEwTMUs5IEw/MUIMT+EAKEEmG+wIGownMUMhIEwsV+wfLEI8K+IISUIeTEAFM+++Kq','zCkCfW','WOpcGSobomoM','a8oAWOpdI8kkvCkulSoEx8kNW48','W4xcISkYW6zKWQClWP7cHSo4','WOiKhG','q2rPlq','W63cG8onEmkX','W6tVVyNMT7ZLIlRLSzVLNQxdNG','umksW5pdKCout8kUgmktCmkNW4G','EE+9JoA0R+wlJ+w2VoE4TEACSq','sdLZ','W58HWQJdVXJdO8kkW5xdTwpcPG','qaOwWOtdVSom','WP/dLmoJ','rfzxW6nEnmkpsa','E3P/yCke','gHe8FCkHWODCW6hdPG','5ys4WQRLJl3XJi28','WO7dI8kU','W483WOVcS8oG','WRddJxtcMrKfuwdcQmkpBCoPW5JdSq','cXSPWReT','W5RcH8oq','5BQ96zgW56wE5yMf8kk/Go+6Na','W5GGWRtdUZRdOW','imkchcW','dumwaadcK2u','CmkZW5m1','AJ5Bbd8','WRPEW6tdTmkJFsCzWQSW','hfLcpcO','W6L/ESk+WPSGrmopW6fnW5NcVSoSW6nxrSoUfdW','FfBcICoGuq','W7ddV8oAytvucdlcNe7dIN0','WQrJpJGt','FCk2W5FcVCom','lmkGarZdSW','W4VdL8oiWP1RWRWy','W6mmWQdcTCk0sZu','5BQu6k6456E66zIC55Ue5REK5yQh776IrW','mqBcQK7dVKxdS8oPWPlcJhfkW5XmzW','W5VNUAxMNOdVVOlKUA/MROpML7lNGOdMNy7LKjLO','jCkahctdRmo6WQdcOWDf','oGZcUq','EIy8WQxdUa','W5NdHmol','W7XolSkwWOi','WQ0UimkiW6C','bEIVVEAZLowMT+I2O8oZ4P6PW4K','W47VVi3MTAZLIzxLTkFNU5/MNAe','WPldHL0'],...(function(){return['w8keku9J','qvDt','WPldMmkRW6SwW4n4txrDC0VcLg3cO1OstZJdMdRcKdmhxJRcKIFdTXSrW6JdS8oimJLVW67cU8k3','xmkvpZRdV8kstmoQWP5NW50/W6RcHwW','WQGCW6i9W5NcJHqyWOldOMLJW5iLpa','uNJdV8oYW6pcLvZcHCk6WQ1tW4bD','WQBcR8kDggCxmblcVhhdOMb4WOlcHq','8k6zIeJMNQJORBJMTQJLIBZKVlVMGkhLPjdOT7hdVokFL8o9','cND1gq','ACkgW5FcICoo','BmkCeW4','W64cWPBcN8kWms8gjG','W6VcGYRdTGpcLCoh','W4CCWQxcLSkT','W5FcKmo4tq1chmo0W58','4P2PkUAEVoIbU+AVPEEIVEwKSEEtR8o/','hf9i','hxvZetdcQW','W5H6t8oAW7a8rHVcJCoT','W7PXWORcKmkB','fdVcPSkXWRBdOqZcISkUWQzgW61N','WORdHLhdNH8','c8kAl8kK','C3ZdKCoQW68','57YI5A255ywi5yEH5A6V5Q6/WQ0','hwBdMSoiW4ZcO20','wxLPouy','rSoLW5y','nLeHWRS/','cxn1ospcQ0BdJItcK0iRhdGB','s8kfobm','W5ldJSoynaNdImo7W494hGbCWR7cRdO','W6/cHLOrW4WSW5aQWPnnWO0','eK0nkrxcLG','W4ddUSoDmtG','W78FWRhcKW','rmo/W5WHeI0','lmk/e8kNWQG','jvpcPSk2oulcKSoYmG','oYSWWRyk','WQpcH8kRDv7cPCoD','W5JdH8oNgrm','5lMT6lkm8ywbRW','W7uAWR/cLmon','776x5BAm5yYz5A2S','idmIWPGj','WRWnW6qvW5tcNrqiWPi','W6aDW6ynW57cPqKbWOddS35zWPiPibxcOG','WQldH8kXW6ddVGmvWOtcR8kX','ASkamgG','hNj/WO/dO0ldRqSpW7tdHmkbW57cQq','AZ9tctG','pvxcRa','WOryccqd','W6ihWRhcMCkHWQzMW6RcVMJdSCo6pCohWPFdUq','fSkola','FSk9W4mO','p2OkWRCjrH/dLW','sCoRW4uGhW','W5/dPSoBjcq','WRldPfBcHHa','WPFORjhMS6lLK4BLUyeF','rfX+F8kMW5iNWQ3dPmo2kCo/fqtcNmkVWRxdMfNdKq','w1lcU8oTqGFdJSkvD8oFW6brW70N','ghr/WQFdTL/dSaq1W7tdNmk8W4xcVmkr','sblcLq0Ft3NcOCorhmkdrCkFxmkZWOVcNmo4oga','W5/dP8ovW4W','w8kkn3Lo','W7ZdNSoAjri','WQL8ja','W5u8WQa','W5hcMCo1','w8k0W4pcP8o3','omkkbCkRWQ8','fXRdPmknW4e','W7FcG8o0WRNdIWK','W5X0bGC','W7HCjmkOWRK','qLxcO8oTtq3dJSoDBq','BSkZW5e+wG','WRxdMGXTWRe','W6muWO3cSmkJDhzaFmoyESolAmoxWRC','8jY5IMtMN6ZOR6NMT67LIQVKVl/MG5ZLP5BOTRFcU+kCI8oH','W7pdQSozW5hcKG','EMPbW6f6','8j2zLKC','wwPYiK7cTmkpW4RcN8oL','nCkabtFdTW','bI8EWOW1','BWXFeZ0','W4ONWQBdPIJdVG','W5lcGmo7q8k7w1i','eLxcPCkNd1JcH8kYfSkIW6PW','BCkjngzO','suzUw8k8WOvT','W5hcP8oEAae','W6pcQSk9zNZcPmoq','W4/cNmoozH4','WQ/OR4xMSOlLKjVLUy5F','WQNdHXTl','W5qFWRlcMSkA','W6PCWRy','4P6YWONMNjdNNz7OROBMSixcJW','WPdcMCoVufJcJSo6W514dLWNW6ldR2yGW70XW6RcQ8khW4OKWRiXW4tcPxekFJGdk8ocFSo3lGFcRZhdJmo5WRfLWQHkW53dSSkKA8kBDSomW63cT8o5z1tcRSo/dSooW5u2ymoeAINcTWddTtFcVCk4WRFdPCoaW6ZcUSobW6NdRmoOz8okdH57BSouvCk1WPXAwxpdImo2W5ytq8oVW6FcSSoXW7RcMSk0W506thf2W4RdR2tcNrtcPSkSWQRdLNLzWP/dVmk9W70uW5miotzay8kKyKJcISoevsZcPGNdLSkeWRdcTCofW7v9bmo7uKFdKr5qjeFdUsyhn8oXWOixW43dLmkOFmkhrmknzLVcGrlcG0OfW67dJCkVWQRdHK/cPcNdL1y2DCkEWQZdGXVcSI7cV2tcN3LUqYOptSo1CCoOeSkKWPFcGK0RqvldUCkamZ3cQSkoy0ldLdGxWOzoDvVcVCoDACoIC8khzmoWCrdcSSoIFmo3dSkXnKK7CmofWQ3cUexcSx3cR8o9WPRcGcX0jCoCWORcH8kJW78qW6PfWPdcPJ0OWRLavJFdSmoxWQW8f8omWO4','iu/cUmk7','WRxdNq8','WOSelSkTW7i','6lYe57Mt562G5yUa','CbhcSsih','W7dcSColAX0'];}())];}())];}());I1l1l=function(){return I11i1lli;};return I1l1l();};var version_ = 'jsjiami.com.v7';

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
