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

var iｉl='jsjiami.com.v7';const i1lilIIi=ii1I1Ii;(function(ii1Iiii,illIllli,lil1iII,liiIllI,IlII11lI,llIi1iI1,lili1ll){return ii1Iiii=ii1Iiii>>0x7,llIi1iI1='hs',lili1ll='hs',function(iiIIii,lii1IiiI,iIll111,iIIiIIiI,il1I111l){const IlliI1ii=ii1I1Ii;iIIiIIiI='tfi',llIi1iI1=iIIiIIiI+llIi1iI1,il1I111l='up',lili1ll+=il1I111l,llIi1iI1=iIll111(llIi1iI1),lili1ll=iIll111(lili1ll),iIll111=0x0;const li1lli11=iiIIii();while(!![]&&--liiIllI+lii1IiiI){try{iIIiIIiI=-parseInt(IlliI1ii(0x1b4,'GbfU'))/0x1*(parseInt(IlliI1ii(0x222,'lMzO'))/0x2)+parseInt(IlliI1ii(0x26c,'kmqG'))/0x3*(parseInt(IlliI1ii(0x1d4,'kZqe'))/0x4)+-parseInt(IlliI1ii(0x169,'VHvU'))/0x5*(parseInt(IlliI1ii(0x19f,'bfbd'))/0x6)+parseInt(IlliI1ii(0x1e2,'dVR%'))/0x7*(-parseInt(IlliI1ii(0x1a5,'YLsd'))/0x8)+parseInt(IlliI1ii(0x1ad,'@Krf'))/0x9*(parseInt(IlliI1ii(0x14e,'@dYa'))/0xa)+-parseInt(IlliI1ii(0x276,'fSPQ'))/0xb+parseInt(IlliI1ii(0x172,'M0pP'))/0xc*(parseInt(IlliI1ii(0x24f,'pnOd'))/0xd);}catch(IiIIIli){iIIiIIiI=iIll111;}finally{il1I111l=li1lli11[llIi1iI1]();if(ii1Iiii<=liiIllI)iIll111?IlII11lI?iIIiIIiI=il1I111l:IlII11lI=il1I111l:iIll111=il1I111l;else{if(iIll111==IlII11lI['replace'](/[nDlOpHfqXbPWVtIMFExLC=]/g,'')){if(iIIiIIiI===lii1IiiI){li1lli11['un'+llIi1iI1](il1I111l);break;}li1lli11[lili1ll](il1I111l);}}}}}(lil1iII,illIllli,function(lllllIIl,I1iilI1i,liIII1Il,IlIiI1II,ilii1l1i,l1lil1ll,lI1i1iIl){return I1iilI1i='\x73\x70\x6c\x69\x74',lllllIIl=arguments[0x0],lllllIIl=lllllIIl[I1iilI1i](''),liIII1Il=`\x72\x65\x76\x65\x72\x73\x65`,lllllIIl=lllllIIl[liIII1Il]('\x76'),IlIiI1II=`\x6a\x6f\x69\x6e`,(0x15a3fb,lllllIIl[IlIiI1II](''));});}(0x5f80,0x3221d,IlIIi1il,0xc1),IlIIi1il)&&(iｉl=0x1cc2);let tokensList=(process[i1lilIIi(0x265,'4nlG')][i1lilIIi(0x26b,'Bytp')]||'')[i1lilIIi(0x1be,'lMzO')](',')||[],TokensMap=null;const CacheFile=__dirname+i1lilIIi(0x242,'VHvU');function ii1I1Ii(_0x3a5869,_0x142eb6){const _0x334380=IlIIi1il();return ii1I1Ii=function(_0x5556de,_0x4bce3e){_0x5556de=_0x5556de-0x12c;let _0x42e014=_0x334380[_0x5556de];if(ii1I1Ii['ZLijiC']===undefined){var _0x2fa370=function(_0x34b7bb){const _0xf542e3='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x54c9d9='',_0x1f9a24='';for(let _0x44e138=0x0,_0x59b5c6,_0xf05520,_0x58a29b=0x0;_0xf05520=_0x34b7bb['charAt'](_0x58a29b++);~_0xf05520&&(_0x59b5c6=_0x44e138%0x4?_0x59b5c6*0x40+_0xf05520:_0xf05520,_0x44e138++%0x4)?_0x54c9d9+=String['fromCharCode'](0xff&_0x59b5c6>>(-0x2*_0x44e138&0x6)):0x0){_0xf05520=_0xf542e3['indexOf'](_0xf05520);}for(let _0xb70036=0x0,_0x68330c=_0x54c9d9['length'];_0xb70036<_0x68330c;_0xb70036++){_0x1f9a24+='%'+('00'+_0x54c9d9['charCodeAt'](_0xb70036)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1f9a24);};const _0x2348f5=function(_0x17ed3a,_0x54f210){let _0x5d1d51=[],_0x3fd581=0x0,_0x54a9fb,_0x14a4c2='';_0x17ed3a=_0x2fa370(_0x17ed3a);let _0x4b35ae;for(_0x4b35ae=0x0;_0x4b35ae<0x100;_0x4b35ae++){_0x5d1d51[_0x4b35ae]=_0x4b35ae;}for(_0x4b35ae=0x0;_0x4b35ae<0x100;_0x4b35ae++){_0x3fd581=(_0x3fd581+_0x5d1d51[_0x4b35ae]+_0x54f210['charCodeAt'](_0x4b35ae%_0x54f210['length']))%0x100,_0x54a9fb=_0x5d1d51[_0x4b35ae],_0x5d1d51[_0x4b35ae]=_0x5d1d51[_0x3fd581],_0x5d1d51[_0x3fd581]=_0x54a9fb;}_0x4b35ae=0x0,_0x3fd581=0x0;for(let _0xe1392c=0x0;_0xe1392c<_0x17ed3a['length'];_0xe1392c++){_0x4b35ae=(_0x4b35ae+0x1)%0x100,_0x3fd581=(_0x3fd581+_0x5d1d51[_0x4b35ae])%0x100,_0x54a9fb=_0x5d1d51[_0x4b35ae],_0x5d1d51[_0x4b35ae]=_0x5d1d51[_0x3fd581],_0x5d1d51[_0x3fd581]=_0x54a9fb,_0x14a4c2+=String['fromCharCode'](_0x17ed3a['charCodeAt'](_0xe1392c)^_0x5d1d51[(_0x5d1d51[_0x4b35ae]+_0x5d1d51[_0x3fd581])%0x100]);}return _0x14a4c2;};ii1I1Ii['MLkVjf']=_0x2348f5,_0x3a5869=arguments,ii1I1Ii['ZLijiC']=!![];}const _0x105670=_0x334380[0x0],_0x16a862=_0x5556de+_0x105670,_0x5d7de9=_0x3a5869[_0x16a862];return!_0x5d7de9?(ii1I1Ii['zbpxkr']===undefined&&(ii1I1Ii['zbpxkr']=!![]),_0x42e014=ii1I1Ii['MLkVjf'](_0x42e014,_0x4bce3e),_0x3a5869[_0x16a862]=_0x42e014):_0x42e014=_0x5d7de9,_0x42e014;},ii1I1Ii(_0x3a5869,_0x142eb6);}function IlIIi1il(){const lI1iIi1=(function(){return[...[iｉl,'qljMxsbtjWlEiaCmWDiMfI.OpcXPVolfmn.FLvH7==','oCkipti+W412m0ddPJSdW5ddPGu','W5XKbmoDEG','W5tcHSoa','W5v3WO5a','W5LOWOW5omo8dHn5WPC2jw/dOsZdSmoe','WOtdTmkk','W7ffoCoaWRGCW5fnvmkMWRtcGaNcM2i0WQunjCokWRBcJ8kBW5xcO0XhWRibgG0GW4rQu0ldL03dKmkG','pmkCt8ovxG','WQGwWPKvW64','WPT/WPS','W5jKWO5oCq','u8kNrSkFaCkRW48JWObmW4BdGSo5xam','WO5crcNcOa','W7ZdKd0','WOusz2S','WQ85DXVcPZVdIa','WRTofSk5FmkmW5xdRN3dHf0Jaffb','o1rSp8kioLe/wG','WOisBwS','WRRcVd8JW5xdJ8kNhCooW67cLYCoWOZcJW','WOhVVQ3MTkhLI4VLTPxNUiRMNiy','WP9IWOOPmmokhJ1XWOy','WQGjWRGcW4e9W4JdH8klkmobpNtcIb4','WRNcUdir','kXT+r8o/','pmkjWOvfWPu','W43dQSo+','FrG3hSkuguy','WO7NUiJMN7/VV6BKU7JMRjlMLklNGiJMNjFLKAxcHW','a++/T+A1SUwlM+wXM+wEKt8','W4hdOepdVCkB','WQPPy2hdTa','WQnsqGu','vCkrW7fHuCkHFmo+WQ8irq','WORcTmoO','ACoQW641uq','W5VdJCoxW5jK','buJdRCoqWOBcRSoXuevJW7FcKmo4m3C','WRFdIGDpwG','yaet','wmkTvq','W4FcTCowWOVcN1RcR8oWety','WQipvCkDbaDOj8o7W53dK8kA','WOFdRSkC','m8ojWRnvqa','W6NdIJKygCodWORdICo6qqRcSWzT','omkfWOWUW6bvrmkBDa','WRiMruLKW5e7tZa/tG','57+o5AYe5yAF5ysl5A2o5Q6DWRy','WPtcUhNcVvzdW7xcP1GKrL0lW5SuzSkBzhDIWRy4g8oaf8oYjdxcKs50pvP0WOiRW755hGuSW4ZdSmkmW6XyWQhcJ8k6W4Sjf3r6tCkSWRpcPZxcRZpcJSkwW4RdRYtdPqpdPmkSW5FdL8kDW7XftSoHW5RcQ0ZcUIddGmkOWQJcNsFdTtKNW47cO0xdL8kWlCoUkHxdOCowWR4tWRRcGSkoB8oYuhDwr3ZdL8kBW6WyeLRcPH1Ehr7dT8kzicacW6NdKsRdQCk7cmoXv8oLgmobW5ldTIDYjb/cHe7cRSkqC8k/mJ/cNxyjtLyYDCowaSkzWRhcPctcR8kCsSkfCY9RW6O6WQ/cJKzGkSkoW6uBWQRcG1GLW5jwWOZcTgJcJ0tdLqKwlK3dQmocWRiyWPZdMCohmCkrdXJdGGunW6ZdLMqrjJpcRCk/W7tcVCkOnxGVW7tcKwZcSCo0gCkcW7DGDqBcG8kvWRNcMNRcKSotcqZcPqZcMvlcLSo9W7fCkuTYWRRcLe7cIx3dVmoVimoznsPpjeFdLN4IErJcUvtdNcRcT8oTWOS7oSoMW4es','bmk/iHuW','WQPodmkCESkkW7xdVa','WPHPeWiYpmkRtHy','B2LSgCop','tsGSW57dPW','zvjL','WPlcTCkSWOiqWPP6WQZcMSoAySk2gG','W5pdQmouW5LaumkWWPK3W6Tdjej4W6uQ','W6/dGqe','wH/dJmk6ja','a07dRCo4WPpcS8oSx39JW6/cRCoJjG','W7S8eq','WPBcRSo8uG','CcitW5ddHq','a17dQSo4WOlcTa','WRNdHmoxW7el','W7roi8ocWR4v','WOZdNmoq','jCk/yCovAa','pIzXESoz','W5JdUbpcGSk+','5yAEWPZLJkRWP6Y3','zSkXsXfw','WPqVyeVdRW','vKzwWQW','4P2CW7/MNkROGPVMRylNO5dLPk3NKjeY','W6pdNKddRmksWQqL','cSkxiYqu','WRCVAqdcSNNcJe/dNa','WQ7dHmk/','WOz5WO8G','WQVcHI9LAWRdP8oqWOWZ','xSkcW64','W6FdVMddQG0','8ls5Smka','tEw/TEwNQE++QEAzPUEaQowfK+ADSowqUXe','yhjso8oU','WOXsotee','WRpcJXVdMSkFWQ8kW4Os','WR3VVQNMTOZLIkNLTAhKU6VdRG','W6VNU5/MNB7VVidKUR7MRkhMLzJNGRBMNipLKOVdGq','WR/dSmol','Asimj8kP','zSoDkWCtW55Ana','gCoSWPG','WReYw0q','776W5Bss5yYV5A2b','W67dIXupcmovWOS','bKtdQSoYWORcR8o2uG','nmo1W4KFcKm','WRJdVgSglW','WRG1yfW6','zCovW6G','W4/cG8kmWQq3WOe','WRiZwKuNW5KGqc4','WQVcHJPOCGFdPSoI','WRy8WOaGW6a','W5JdSSoJW7PS','W6hdLLRdRa','W43dU0ddMCkk'],...(function(){return[...['W7pdI2/dTaK','W4vBt8kcWRS','WQbArHtcVaTtW5H4','WRefhYhcRG','WRS1AHRcPZO','WRjUdXiq','bhtdJCotWOi','mSo/W44w','xb7dM8kVofJcNdDoWRRdGCokCqVdJLXtfSkXW4xcOcJdJ0/cMGpcOmoJsIibwM/cRmkHW7xcQSoBjCkoWP3dNCoReJVcV8kgfmovbmoGtsNdL8kTiGSAW6NcQcTTeCkPWOr9bxdcICkLa8k1jmk4iXlcPuNdVwTqWROIiYHvoCkSqSkACdpdTvNdJ8o+W4P8WPTDqSkBjZ/cNSoaWQZdJaNdVfGUghxdOq3cPWGMWPa1BCkPemkTWPpdKSk1fHtdNWZdHwddJdj3gmkqW61AW4pcJ8kgW6dcQtjaWR3dJSkiuJWWWRNdJNpcI8kmu8kSWPSaWPuYfWXQWOpdTK7cGqVdNCkxsc1JW4aEWOzoW6Wigdr0zHa2W5aGW53dQmk3WRHsFmo3WRz2WPydF8oWFmoIBLjYW5xcVsxcR8kKzSk1aI4dBSk3WQSboG0gk34lW5GrWOaPiCknjYVdNCkNxmouF2/dRCoT','n8oNWQP3EW','W4a0W4KFpCoeldb9','WRddMh0','zCoyW5i','W4z3WPnv','WQbxfaa5','W6/dMeFdOW','WQxdPgSPfG','bCkbvSovt8kRW7e6DfPlW63cMmoiWQ9bWQFdR8kvsG','qb/dLmk7lrhcVam','i3BcSSogfSkEWOFdNColW5y9nq','8lE6VCoh','W5RdL8km','W4RcRmkNWPKM','vSkfw8ktfG','W5RcJmkrWQi1','odbLtG','bCoXWPz1AG','BSosW4e9W6LKySkMwJP5wNZdKSoR','yvHJk8oYbmoh','W7FdJ8k4nCkr','W54KwsKLc8kMCbK','dSk0WQvBWPz7W6/dUmoWl1CyW4/dRwhcPeGzW77cLZC','rCkgW7bOCCk9qCoO','qSkhvYvk','W6nFeCoouu1alCoBW7O','WQpdRCkQdK4','W4JcICktWQGuWOhcRIFcQG','wHxdNCkAoHe','W79PkCoJvG','WONcULJdRcOwW5JcSG','ltPMqSovW58','ESocW5yFW69JEa','WO8+bYS','W7LypSomWQ0t','6l6g57M956+z5yMi','WRVdK8oRWPji','W7zEimohWQ8p','W5/cVmohWOhcIW','WRzuBXpcMa','BvX2lG','W5VcHCkk','vX7cOmoEWQJcTCoWuf8','WPqUetpdTmkPWPdcHfz2','W6pdIfldOGe','mSkclG','5P+h552L5AEL5zgx772T','5BU06k+d56AV6zIz55M15Rwr5yQD7729jG','W7rBf8oNcu1W','W5zpmtZdQhatW4ddL8ol','W5NdR1VdVaedW64','gmkOWQ5UWO9LW47dSCot','6l+B57Qc56YB5yQN','WPKlAX7cPW','WOaEFwFdKfGpW6NdH8oM','W60zvCopk8kEW63dOhVdN0O','r0bwWQ0LW4i','W4f3WPnxFa','WO3dRxW7mW','W5ZcSSoeWP7cGW','WO3dOmkFfW','jmoUnL5IW6PayxOo','D8kQW4XErW','WRVdUei5pW','WRNcUd8d','pYXH','WOOgaGtcJG','sZBdR8kUyq','W7rBf8oUx0PToSogW6/dVmkqWQxcRSk4','bCoZbmoSwSoMW4O+WR1+W6NdIa','WRBVViFMTzRLI4pLSzRLNBpdOG','WQisz3RdG18pWR3dMSo7g8ki','WODYbG','W7vNn8oTwW','mSkVhJCE','r8kmW5Xkya','WQLPcSopWOyOW7y','AmohW5XsW6C+yCk0hs1VFG','EmkRDbzsWOqgohmtWQ4wA2e6zSkcy8k1tgOhW5bV','W6FdLL/dGCkl','cmkzDCobFW','umkeW65Muq','W5vIWQ9zEW','W5FcGSkUWRWf','ySkavSk1jG','W6Xed8oJWR4','k8oGW4SrcG','WRLfbSkSDSkvW5K','W5BcHSoq','WPCXufRdHW','qmkxW794yCk8','W45+o8oVWPG','W6r4WQPmxa','W79rjmovW6zDW5zCBCkPWRdcMHJdKJajWQq','W7pcRSkWWRWP','WQxcJs1fzbFdQSoNWOyZoCkiW4hdRSk3','WOddR8kDf1BcUSkmW5FdU3i','bCoWc8kmcmkAW6KEWQ4','WONdGmoHW6ddVWZcQG','jwVdUmo/WOi','WQHXfr8f','WO4doqFcMW','WQ9FemkrCCkFW5xdVM0'],...(function(){return['WQpLVQ7LPQ3VVBdMMlpNGiVLHApMN7pLKQLq','WQrgwbK','WQJdNNCg','WQ0OtW','ys7dV8kXr8odWQW','WOVdN8koWOTWeLtdQfXolG','W5z5WOXrEG','WOGtF2/dILGFW5hdRCo2','WRhdVmoeW4NdKq','umkJs8kT','5lMJ6lcQ8yYrTq','WOxdPmkfeu7cUW','WReDyL8/','kYXHASorW4uScSkbD8oRBI1cW5G','WPGUoGVcJG','iCoTn1evW5H4B30mWQK','pJX7BSoCW5u','W7BdTt7cKCkQ','jmoXna','qmkWW4zaqSkdsCoJWRm','W4BdVSok','WP9IWOGTlSocgqHcWOaXlctdMdtdQSoMAsnE','8lEiRSk55P2s6k+a5RAz5yUH5lYH5OkA5AAo6lsqW6lIN5hcJa','WR18EWxcLG','4P2fWPFMNP/NNPNORB3MSziR','nmo/W4a','W6JdHeK','5lYS5OcI5yIk8yI2S++7Ka','WRm+qHBcTW','W7ZOR5ZMSkdLP4NOTlRdMokCOmk45PE05zg95BQW5PsA5OYa','W7xdVCkMmSkf','aCkArq','W5vKFSkfWQLX','WPJdJCofW5eY','W6HcfmoDWQe','lqTbE8ox','W7Lnb8oZWPG','4PM0e+IVNoweUEwTTEs4TUw/T+IKToEAJoEoVEwIQowoL+MfPEwrG+weJUI/L+IJGoIgPEACT++8GG','W43dUL3dLmkP','W459txRdR8krWRRcI1bBWPS','W5X4mSkYWPiUWQddG8kMWPbkafRdHLDPd0Wc','W5vKWO5aCCoIqcZcKweia8ku','WQqMy3WV','WOJdSmoPW5e8','WPLOdq4V','C8k4CaXK','W7FdVmoQW41T','B8odW7SLxLZcIg8iF8kwWQVdPLFcNq','FSo0W4SUBG','WPOAzWdcPq','WQxdTSorWOe','8ycROftMNQBORlVMT7pLIztKViZMGy/LPklOT4CH4P+heG','zIRdOCkAsa','WO/cTCo7x8oBbs4bBSoPW7bjosNdJxHjW43cJmkA','yWWK','5ywg57Un5y2G8lQvTq','ofZdTSojWQO','dYvHx8oR','pmoXW5mz','W5NdVSkkoCk+','W4hORORMSyVLPl/OTOmr4P+NWRa','WPmKeW','WRXREYVcNG','W4hdUM/dICkA','5BMy6zkw56sJ5yMf8lEVLU+6RG','W7pcS8otW74d','WOWts0ZdKG','W5VdPvpdTG','m8k+pHuK','AmoDW5OqW6S','W4lcTmoh','FCoRW7KJAG','W6achuNcRcTBW4nGFW','WQJcHZbQ','FHGNfq','rmobWRHLq8k5zq','y8o+W5C2W68','5BM56kYa56AD6zIy55UT5RAj5yMg776mWOq','pZ10wCogW6uSeCkn','W6tdMIlcV8oKa8oLWP9EW7m','WRWVDqFcPsy','jqrwCCoy','W7j3hrL7WOz6sJGZD2q7','B8kIWP9kmgPKvL1m','W7ZcO8o7W6Gj','WRO5CI/cOtZdLqNcHKNcMxWhW41j','WRtcTZ0dW5RdKSkQkSoeW64','W63dGuSFbSoaWP0','WRhcTIW','W47dSmozW4e','4PYuWRdOHR3MNztOVQ7OOAFPGyVLIlBKUOlPLjZORAhdOa','ymkTArXeW7jazgy','W4v6WQrZxq','gmkOprWT','bE++IUA2NowlKow2Jos6PsW','WRHwrrBcMXC','WRGnfs3cVG','W4BdOmoTW7zbW5yGWRBcNmoltmkli8okW7G','WQxcTmoHtSomkd9ctSo1W7jZ','s8krW5rLwG','zmojW6G','W7ZORydMSzJLKQ7LU7pdUq','cWTIB8oy','wcNdI8khuG','i8kLu8ocxq','uCkWqmkXea','B8oECuPTWOLrbKFdGaGs','W4TXBW','zSoVW5GGua','WOFdLSodW4ddSbhcP2mOnqGFW4ddOYy','cGXHrmoc'];}())];}())];}());IlIIi1il=function(){return lI1iIi1;};return IlIIi1il();};!(async()=>{const iiiIilll=i1lilIIi,iIl1IilI={'jLWvH':function(lIIl111l){return lIIl111l();}};await iIl1IilI[iiiIilll(0x18c,'dZ7k')](Main);})()[i1lilIIi(0x1a1,'Knp)')](iiI1ilI=>$[i1lilIIi(0x184,'&)ZR')](iiI1ilI))[i1lilIIi(0x13d,'8Q!B')](()=>$[i1lilIIi(0x24c,'0p93')]());async function Main(){const l1iiiIl1=i1lilIIi,l1illiII={'gOXZX':function(ll1Il1,i1liillI){return ll1Il1!==i1liillI;},'toBFt':l1iiiIl1(0x257,'2cnn'),'bGiMt':function(i1l1Ii,l1Iii1iI){return i1l1Ii>l1Iii1iI;},'ajola':function(iIIillII,liill1l){return iIIillII<=liill1l;},'QZfXT':l1iiiIl1(0x1f4,'EY]p'),'FEtop':function(l11i1,i1Illi1I){return l11i1/ i1Illi1I;},'NNkbw':function(IlIIIii,lIlIlIli){return IlIIIii<lIlIlIli;},'gRklM':function(IIiI11l1,lIl1IlIi){return IIiI11l1(lIl1IlIi);},'fJdZa':l1iiiIl1(0x251,'wYme'),'fYTBg':l1iiiIl1(0x277,'4Q1x'),'afJVR':function(I1lIIIIl,i1I1111){return I1lIIIIl<i1I1111;},'DWmpe':function(lliIi1iI,II1liIiI){return lliIi1iI>II1liIiI;},'VyszO':function(l1l1l,ll1iiII){return l1l1l===ll1iiII;},'vLYTa':l1iiiIl1(0x135,'H@5X'),'glCGI':function(lll11I,I1ii1lIl){return lll11I===I1ii1lIl;},'RBhze':l1iiiIl1(0x1ea,'@Krf'),'epZGY':l1iiiIl1(0x151,'cQ1Y'),'HLnTt':function(llII1Il,lllIlII1){return llII1Il>lllIlII1;},'AwSBv':function(l1iliiII,III11){return l1iliiII===III11;},'cgpjE':l1iiiIl1(0x261,'O6zW'),'IZdLE':l1iiiIl1(0x197,'pnOd'),'elWdC':function(lI11ll1l,lII1i1I){return lI11ll1l(lII1i1I);},'ONNqn':l1iiiIl1(0x26e,'R[S3'),'iOPty':l1iiiIl1(0x1b2,'@dYa')};try{if(l1illiII[l1iiiIl1(0x14d,'pnOd')](l1illiII[l1iiiIl1(0x1bd,'GbfU')],l1illiII[l1iiiIl1(0x1b3,'cz]V')]))lll1Ilil[l1iiiIl1(0x24b,'9iSU')]('['+liI1IIi1+l1iiiIl1(0x1ae,'V**u')+I1ii+l1iiiIl1(0x1cf,'Bytp')),lil1Iii1[l1iiiIl1(0x13b,'j2Xp')](Illl1liI),li11I1I=![];else{if(l1illiII[l1iiiIl1(0x176,'@Krf')](tokensList[l1iiiIl1(0x22e,'EY]p')],0x0))tokensList=[...new Set(tokensList[l1iiiIl1(0x163,'R[S3')](iIIiIll=>iIIiIll!==''))];if(l1illiII[l1iiiIl1(0x214,'kmqG')](tokensList[l1iiiIl1(0x1da,'O%w(')],0x0)){console[l1iiiIl1(0x266,'@Krf')](l1illiII[l1iiiIl1(0x1a2,'k@j1')]);return;}TokensMap=new Map(tokensList[l1iiiIl1(0x143,'cz]V')]((liiii1iI,liiIii1I)=>[liiii1iI,{'index':liiIii1I+0x1,'venderId':'','activityId':'','isValid':!![],'rules':[]}]));const ll1i1IlI=[];console[l1iiiIl1(0x227,'wYme')]('');for(const iilIliI of tokensList){let l1IIi1l1=!![];$[l1iiiIl1(0x183,'cQ1Y')]=Math[l1iiiIl1(0x177,'cQ1Y')](l1illiII[l1iiiIl1(0x22c,'@dYa')](Date[l1iiiIl1(0x269,'O%w(')](),0x3e8))+l1iiiIl1(0x12e,'Rl(I'),$[l1iiiIl1(0x1d5,'Knp)')]=iilIliI;let i1ill1I1=0x0;$[l1iiiIl1(0x23c,'lUkJ')]='',$[l1iiiIl1(0x142,'BHND')]=![];while(!$[l1iiiIl1(0x24e,'bfbd')]&&l1illiII[l1iiiIl1(0x162,'P5K[')](i1ill1I1,0x5)&&!$[l1iiiIl1(0x253,'VHvU')]){$[l1iiiIl1(0x224,'R[S3')]='',await l1illiII[l1iiiIl1(0x256,'@C@Y')](sendRequest,l1illiII[l1iiiIl1(0x1e0,'9iSU')]),await $[l1iiiIl1(0x241,'Knp)')](0x3e8),i1ill1I1++;}const illilili=$[l1iiiIl1(0x1fe,'O6zW')][l1iiiIl1(0x171,'&)ZR')],lllIliI1=$[l1iiiIl1(0x254,'O2XW')]['id'],iIIilil=$[l1iiiIl1(0x1dc,'@C@Y')][l1iiiIl1(0x12d,'cTa@')],IIIlilI1=$[l1iiiIl1(0x249,'@Krf')][l1iiiIl1(0x17e,'2cnn')]||[],lIIIl=$[l1iiiIl1(0x263,'cTa@')][l1iiiIl1(0x21d,'@C@Y')],ili1Iill=$[l1iiiIl1(0x23e,'@dYa')][l1iiiIl1(0x1bf,'bfbd')],l1lIIili=$[l1iiiIl1(0x201,'dZ7k')](l1illiII[l1iiiIl1(0x1b1,'p71e')],lIIIl),IiiI1l=$[l1iiiIl1(0x1d1,'k@j1')](l1illiII[l1iiiIl1(0x165,'cTa@')],ili1Iill),iilliI1I=Date[l1iiiIl1(0x14c,'dZ7k')]();lIIIl&&l1illiII[l1iiiIl1(0x1f3,'GbfU')](iilliI1I,lIIIl)&&(console[l1iiiIl1(0x1b0,'V**u')]('['+iilIliI+l1iiiIl1(0x25b,'@dYa')+l1lIIili+l1iiiIl1(0x146,'H@5X')),ll1i1IlI[l1iiiIl1(0x150,'Tz4o')](iilIliI),l1IIi1l1=![]);if(ili1Iill&&l1illiII[l1iiiIl1(0x19d,'R[S3')](iilliI1I,ili1Iill))console[l1iiiIl1(0x20c,'P5K[')]('['+iilIliI+l1iiiIl1(0x22d,'lMzO')+IiiI1l+l1iiiIl1(0x25a,'YGSr')),ll1i1IlI[l1iiiIl1(0x189,'P5K[')](iilIliI),l1IIi1l1=![];else l1illiII[l1iiiIl1(0x1fd,'fSPQ')](iIIilil,0x3)&&(l1illiII[l1iiiIl1(0x1a7,'k@j1')](l1illiII[l1iiiIl1(0x1c1,'0p93')],l1illiII[l1iiiIl1(0x175,'cQ1Y')])?(IIi1ll1i[l1iiiIl1(0x215,'YGSr')](l1iiiIl1(0x1e5,'fSPQ')+I1IIII1l[l1iiiIl1(0x157,'O6zW')]),lIiIll[l1iiiIl1(0x225,'wYme')]=!![]):(console[l1iiiIl1(0x260,'epqc')]('['+iilIliI+l1iiiIl1(0x252,'k@j1')),ll1i1IlI[l1iiiIl1(0x141,'VHvU')](iilIliI),l1IIi1l1=![]));let Illl1IiI=![];const lll11iIi=[];for(const iIII1IIi of IIIlilI1){const iI1i1ii1=iIII1IIi[l1iiiIl1(0x12c,'&)ZR')],IlI1lll=iIII1IIi[l1iiiIl1(0x22a,'YLsd')]||[],l1IiIIli=[];for(const i1liI1il of IlI1lll){let ill1iil='';const I1II1III=i1liI1il[l1iiiIl1(0x153,'cTa@')],II1ill1l=i1liI1il[l1iiiIl1(0x178,'@C@Y')],lllllii1=i1liI1il[l1iiiIl1(0x18d,'GbfU')],ll1lIIii=i1liI1il[l1iiiIl1(0x1c2,'cz]V')],iiilI11l=l1illiII[l1iiiIl1(0x22b,'Knp)')](ll1lIIii,0x5);switch(II1ill1l){case 0x1:ill1iil=l1illiII[l1iiiIl1(0x194,'q5tu')];break;case 0x4:ill1iil=I1II1III+l1iiiIl1(0x1d9,'O2XW');break;case 0x6:ill1iil=I1II1III+l1iiiIl1(0x20f,'O2XW');break;case 0x9:ill1iil=l1IiIIli?.[l1iiiIl1(0x1e4,'VHvU')][0x0]?.[l1iiiIl1(0x1d3,'M0pP')]+'🎁';break;case 0xa:ill1iil=I1II1III+l1iiiIl1(0x138,'wYme');break;case 0xe:ill1iil=l1illiII[l1iiiIl1(0x23d,'@C@Y')](I1II1III,0x64)+l1iiiIl1(0x206,'4nlG');break;default:ill1iil=l1iiiIl1(0x196,'PIg)')+II1ill1l+'）';}if(![0x1,0x6][l1iiiIl1(0x15a,'BHND')](II1ill1l)&&!iiilI11l)Illl1IiI=!![];l1IiIIli[l1iiiIl1(0x219,'pnOd')](ill1iil+'（共'+lllllii1+'份'+(iiilI11l?l1illiII[l1iiiIl1(0x1fa,'PIg)')]:'')+'）');}lll11iIi[l1iiiIl1(0x12f,'epqc')]({'days':iI1i1ii1,'prize':l1IiIIli,'havePrize':Illl1IiI});}l1illiII[l1iiiIl1(0x15e,'8Q!B')](lll11iIi[l1iiiIl1(0x154,'lMzO')],0x0)&&(l1illiII[l1iiiIl1(0x17c,'W(Je')](l1illiII[l1iiiIl1(0x1b9,'cz]V')],l1illiII[l1iiiIl1(0x1fc,'YLsd')])?console[l1iiiIl1(0x1e3,'4Q1x')]('【'+iilIliI+'】\x0a'+lll11iIi[l1iiiIl1(0x205,'pnOd')](i1iI1lIi=>l1iiiIl1(0x19c,'4nlG')+i1iI1lIi[l1iiiIl1(0x255,'wYme')]+'天：'+i1iI1lIi[l1iiiIl1(0x248,'Knp)')][l1iiiIl1(0x212,'q5tu')]('，'))[l1iiiIl1(0x218,'BHND')]('\x0a')+'\x0a'):iIl1iiI[l1iiiIl1(0x1ee,'H@5X')](lil1lil1));!Illl1IiI&&(ll1i1IlI[l1iiiIl1(0x1d0,'EY]p')](iilIliI),l1IIi1l1=![]);const ii1lliII=TokensMap[l1iiiIl1(0x191,'cQ1Y')](iilIliI);ii1lliII[l1iiiIl1(0x17f,'cz]V')]=illilili,ii1lliII[l1iiiIl1(0x19e,'0p93')]=lllIliI1,ii1lliII[l1iiiIl1(0x1ca,'lUkJ')]=l1IIi1l1,ii1lliII[l1iiiIl1(0x1fb,'V**u')]=lll11iIi,TokensMap[l1iiiIl1(0x1a9,'@C@Y')](iilIliI,ii1lliII);}if(l1illiII[l1iiiIl1(0x25c,'8Q!B')](ll1i1IlI[l1iiiIl1(0x133,'GbfU')],0x0)){console[l1iiiIl1(0x278,'Bytp')](l1illiII[l1iiiIl1(0x210,'kZqe')]);for(const lll11lII of ll1i1IlI){console[l1iiiIl1(0x275,'je0I')](lll11lII);}}const i1lliil1=Object[l1iiiIl1(0x25f,'cz]V')](TokensMap),lli1lllI=l1illiII[l1iiiIl1(0x1b8,'H@5X')](require,'fs');lli1lllI[l1iiiIl1(0x1f8,'Knp)')](CacheFile,JSON[l1iiiIl1(0x159,'Tz4o')](i1lliil1)),console[l1iiiIl1(0x174,'W(Je')](l1illiII[l1iiiIl1(0x1c6,'cQ1Y')]);}}catch(iIIIii1i){l1illiII[l1iiiIl1(0x148,'V**u')](l1illiII[l1iiiIl1(0x147,'je0I')],l1illiII[l1iiiIl1(0x1e6,'EY]p')])?iliIIliI[l1iiiIl1(0x187,'@C@Y')](ii1iI1ll,lllIi1lI):console[l1iiiIl1(0x1c0,'kZqe')](l1iiiIl1(0x229,'lMzO')+iIIIii1i);}}async function handleResponse(IiiI1lli,I1I11ill){const I111ii1I=i1lilIIi,IliIIili={'ZRkfm':I111ii1I(0x231,'epqc'),'wtHmo':I111ii1I(0x21c,'Bytp'),'FJLZO':function(iIll1II,iIi11lI){return iIll1II!==iIi11lI;},'qHMDB':function(IiIl1ll,I1iIi1ii){return IiIl1ll!==I1iIi1ii;},'YseQG':I111ii1I(0x23f,'p71e'),'iMCZj':I111ii1I(0x273,'je0I'),'NPqga':I111ii1I(0x17a,'kmqG'),'GFang':function(II1Il11i,ll1ll111){return II1Il11i===ll1ll111;},'GBwDj':I111ii1I(0x15c,'fSPQ'),'TDdgn':I111ii1I(0x18e,'YGSr'),'ySqJq':I111ii1I(0x25d,'Rl(I'),'hXPZq':I111ii1I(0x246,'O2XW'),'aBTPe':function(lliiI11l,lII1I1I){return lliiI11l!==lII1I1I;},'JlAxt':I111ii1I(0x1dd,'P5K[')};try{if(IliIIili[I111ii1I(0x1cd,'P5K[')](IliIIili[I111ii1I(0x1ab,'M0pP')],IliIIili[I111ii1I(0x220,'@C@Y')]))switch(IiiI1lli){case IliIIili[I111ii1I(0x237,'H@5X')]:if(IliIIili[I111ii1I(0x200,'R[S3')](I1I11ill[I111ii1I(0x250,'0p93')],0xc8)&&IliIIili[I111ii1I(0x1cb,'cTa@')](I1I11ill[I111ii1I(0x259,'pnOd')],!![])&&I1I11ill[I111ii1I(0x228,'4Q1x')])IliIIili[I111ii1I(0x223,'kZqe')](IliIIili[I111ii1I(0x235,'@C@Y')],IliIIili[I111ii1I(0x132,'PIg)')])?$[I111ii1I(0x1c7,'BHND')]=I1I11ill[I111ii1I(0x16c,'Knp)')]:(delete ii1lIl[I111ii1I(0x15d,'8Q!B')],delete lIlI11li[I111ii1I(0x19a,'q5tu')][IliIIili[I111ii1I(0x270,'@dYa')]]);else I1I11ill[I111ii1I(0x1e9,'8Q!B')]?IliIIili[I111ii1I(0x22f,'P5K[')](IliIIili[I111ii1I(0x16f,'k@j1')],IliIIili[I111ii1I(0x20d,'EY]p')])?l1ii1I1i[I111ii1I(0x233,'O6zW')](iiiI1l1):(console[I111ii1I(0x258,'fSPQ')](I111ii1I(0x202,'P5K[')+I1I11ill[I111ii1I(0x247,'VHvU')]),$[I111ii1I(0x1c8,'O%w(')]=!![]):(console[I111ii1I(0x134,'lUkJ')]('❓'+IiiI1lli+'\x20'+JSON[I111ii1I(0x272,'V**u')](I1I11ill)),$[I111ii1I(0x1d6,'0p93')]=!![]);break;}else{l1IIiI1[I111ii1I(0x1c0,'kZqe')](IliIIili[I111ii1I(0x1ba,'Knp)')]);for(const Ii1lIili of iil1Iiii){iliIiIll[I111ii1I(0x16b,'kmqG')](Ii1lIili);}}}catch(lIIllIl){IliIIili[I111ii1I(0x1f2,'@C@Y')](IliIIili[I111ii1I(0x182,'O%w(')],IliIIili[I111ii1I(0x236,'M0pP')])?IliIIili[I111ii1I(0x26a,'dVR%')](Iliilili,0x193)&&llIIliI[I111ii1I(0x1e8,'lMzO')](l1lIlIi1):console[I111ii1I(0x14f,'dVR%')](I111ii1I(0x13c,'YLsd')+IiiI1lli+I111ii1I(0x234,'k@j1')+(lIIllIl[I111ii1I(0x152,'Bytp')]||lIIllIl));}}async function sendRequest(i1lliI1I){const ll1lill1=i1lilIIi,IlliIlli={'HGIIu':ll1lill1(0x140,'O%w('),'piYxk':ll1lill1(0x1ac,'p71e'),'mnBBt':ll1lill1(0x264,'Bytp'),'Qimpb':ll1lill1(0x244,'GbfU'),'xrJiN':ll1lill1(0x204,'epqc'),'jIbJe':function(i1Ii1I1I,ll1I1lil){return i1Ii1I1I(ll1I1lil);},'RXWCk':ll1lill1(0x1e1,'YLsd'),'yPLcB':ll1lill1(0x1b6,'YLsd'),'oFaNY':ll1lill1(0x13f,'R[S3'),'uMvGW':function(lIilIIl1,l1liiII1){return lIilIIl1===l1liiII1;},'ClttY':ll1lill1(0x1a6,'cz]V'),'kbPqB':ll1lill1(0x243,'YGSr'),'cKPsg':ll1lill1(0x1c5,'GbfU'),'FnMxH':ll1lill1(0x1f7,'#tf)'),'CEMEb':ll1lill1(0x193,'P5K['),'dKqeH':ll1lill1(0x21e,'9iSU'),'BAUlm':ll1lill1(0x1b5,'kmqG'),'yrHps':ll1lill1(0x170,'H@5X'),'lWJLj':ll1lill1(0x158,'cQ1Y'),'VUvJR':ll1lill1(0x226,'Bytp'),'BdUxt':ll1lill1(0x26d,'Tz4o'),'DMADd':ll1lill1(0x1af,'0p93'),'VBdkD':function(ilil11l,ill11ilI){return ilil11l<ill11ilI;},'eaKPf':ll1lill1(0x1db,'Tz4o'),'bgDbw':ll1lill1(0x1b7,'8Q!B'),'nbDxu':function(iilIiIIi,I1liIi1I){return iilIiIIi>I1liIi1I;},'mSwfy':function(i1lI1lII,lIiIlil){return i1lI1lII===lIiIlil;},'zHNeF':ll1lill1(0x1ff,'O6zW'),'ridtp':ll1lill1(0x16d,'V**u'),'nIWDm':function(l1lllii,liIlIIi1){return l1lllii!==liIlIIi1;},'ZqoXO':ll1lill1(0x164,'V**u'),'vnKww':function(iiiiiII1,Ili1lIl1,iiilII){return iiiiiII1(Ili1lIl1,iiilII);},'TzjWI':function(i1lli11I,ll1IlI1i){return i1lli11I>=ll1IlI1i;},'rodQk':function(liI111,IIlIl1i1){return liI111!==IIlIl1i1;},'HMsYW':ll1lill1(0x1d7,'lUkJ'),'uRiEI':ll1lill1(0x144,'q5tu')};if($[ll1lill1(0x1df,'@C@Y')])return;let il11l1I='',lIiIl11I=null,IilIiIi=null,III1l1Ii=IlliIlli[ll1lill1(0x137,'9iSU')],i11Ii1i={},llll11II={};switch(i1lliI1I){case IlliIlli[ll1lill1(0x1f1,'GbfU')]:llll11II={'appId':IlliIlli[ll1lill1(0x211,'0p93')],'functionId':IlliIlli[ll1lill1(0x245,'H@5X')],'appid':IlliIlli[ll1lill1(0x232,'cz]V')],'body':{'token':$[ll1lill1(0x203,'M0pP')],'venderId':IlliIlli[ll1lill1(0x21b,'kmqG')](parseInt,$[ll1lill1(0x271,'bfbd')])||''},'version':IlliIlli[ll1lill1(0x180,'YLsd')],'ua':$['UA']},i11Ii1i=await H5st[ll1lill1(0x198,'p71e')](llll11II),il11l1I=IlliIlli[ll1lill1(0x15b,'O2XW')],IilIiIi=Object[ll1lill1(0x18a,'GbfU')]({},i11Ii1i[ll1lill1(0x181,'p71e')],{'jsonp':IlliIlli[ll1lill1(0x20a,'W(Je')]});break;default:console[ll1lill1(0x20c,'P5K[')](ll1lill1(0x1e7,'kmqG')+i1lliI1I);return;}const l11IllI1={'t':$[ll1lill1(0x161,'EY]p')],'loginType':'2'};lIiIl11I&&Object[ll1lill1(0x21f,'R[S3')](lIiIl11I,l11IllI1);IilIiIi&&(IlliIlli[ll1lill1(0x216,'O6zW')](IlliIlli[ll1lill1(0x208,'@C@Y')],IlliIlli[ll1lill1(0x1cc,'V**u')])?Object[ll1lill1(0x131,'cTa@')](IilIiIi,l11IllI1):(lIIIilli[ll1lill1(0x16a,'k@j1')]('['+li1lI1l+ll1lill1(0x14a,'lUkJ')+Ii1IliiI+ll1lill1(0x14b,'Rl(I')),llli1IlI[ll1lill1(0x12f,'epqc')](liII1Il),llili1iI=![]));const l11Iilli={'url':il11l1I,'method':III1l1Ii,'headers':{'Accept':IlliIlli[ll1lill1(0x1bb,'cQ1Y')],'Accept-Encoding':IlliIlli[ll1lill1(0x160,'#tf)')],'Accept-Language':IlliIlli[ll1lill1(0x1c4,'Knp)')],'Connection':IlliIlli[ll1lill1(0x1ed,'W(Je')],'Content-Type':IlliIlli[ll1lill1(0x155,'k@j1')],'Host':IlliIlli[ll1lill1(0x15f,'q5tu')],'Referer':IlliIlli[ll1lill1(0x156,'Tz4o')],'Sec-Fetch-Dest':IlliIlli[ll1lill1(0x185,'p71e')],'Sec-Fetch-Mode':IlliIlli[ll1lill1(0x1c3,'GbfU')],'Sec-Fetch-Site':IlliIlli[ll1lill1(0x168,'dVR%')],'User-Agent':ll1lill1(0x167,'&)ZR')+Date[ll1lill1(0x240,'kZqe')]()+ll1lill1(0x26f,'q5tu')},'params':IilIiIi,'data':lIiIl11I,'timeout':0x7530,'httpsTlsOptions':common[ll1lill1(0x19b,'2cnn')]()};IlliIlli[ll1lill1(0x130,'4nlG')](III1l1Ii,IlliIlli[ll1lill1(0x274,'4nlG')])&&(delete l11Iilli[ll1lill1(0x1a4,'O%w(')],delete l11Iilli[ll1lill1(0x17b,'je0I')][IlliIlli[ll1lill1(0x20e,'8Q!B')]]);const Il1iiIi=0x1;let iI1i1liI=0x0,I1ilI1il=null,ii11IIl1=null;while(IlliIlli[ll1lill1(0x1bc,'@Krf')](iI1i1liI,Il1iiIi)){if(IlliIlli[ll1lill1(0x1aa,'P5K[')](IlliIlli[ll1lill1(0x1f9,'Tz4o')],IlliIlli[ll1lill1(0x18f,'EY]p')]))lI1I1IIl[ll1lill1(0x1d2,'Tz4o')]('【'+IlIIiiii+'】\x0a'+IIi111l[ll1lill1(0x23a,'#tf)')](iIlllI1=>ll1lill1(0x18b,'lMzO')+iIlllI1[ll1lill1(0x1d8,'@Krf')]+'天：'+iIlllI1[ll1lill1(0x179,'dVR%')][ll1lill1(0x16e,'8Q!B')]('，'))[ll1lill1(0x166,'lMzO')]('\x0a')+'\x0a');else{IlliIlli[ll1lill1(0x1eb,'R[S3')](iI1i1liI,0x0)&&await $[ll1lill1(0x25e,'EY]p')](0x7d0);const liIiil1l=await common[ll1lill1(0x24d,'R[S3')](l11Iilli);if(!liIiil1l[ll1lill1(0x188,'kmqG')]){if(IlliIlli[ll1lill1(0x213,'@dYa')](IlliIlli[ll1lill1(0x262,'fSPQ')],IlliIlli[ll1lill1(0x1a3,'YGSr')]))IliiIl1i[ll1lill1(0x1e3,'4Q1x')]('❓'+IIIi1ill+'\x20'+llilI11l[ll1lill1(0x1ce,'bfbd')](i1IiiliI)),l1iliII[ll1lill1(0x267,'YGSr')]=!![];else{ii11IIl1=liIiil1l[ll1lill1(0x1ef,'#tf)')],I1ilI1il=ll1lill1(0x145,'YGSr')+i1lliI1I+ll1lill1(0x20b,'0p93')+liIiil1l[ll1lill1(0x238,'@Krf')],iI1i1liI++;continue;}}if(!liIiil1l[ll1lill1(0x190,'je0I')]){if(IlliIlli[ll1lill1(0x23b,'O6zW')](IlliIlli[ll1lill1(0x207,'cTa@')],IlliIlli[ll1lill1(0x24a,'EY]p')]))lll1illI[ll1lill1(0x230,'fSPQ')]=IIlili1i[ll1lill1(0x209,'lMzO')];else{I1ilI1il=ll1lill1(0x173,'Knp)')+i1lliI1I+ll1lill1(0x1ec,'bfbd'),iI1i1liI++;continue;}}await IlliIlli[ll1lill1(0x139,'YLsd')](handleResponse,i1lliI1I,liIiil1l[ll1lill1(0x1a8,'wYme')]),ipBlack=![];break;}}IlliIlli[ll1lill1(0x13e,'@dYa')](iI1i1liI,Il1iiIi)&&(IlliIlli[ll1lill1(0x136,'@C@Y')](ii11IIl1,0x193)&&(IlliIlli[ll1lill1(0x1f0,'PIg)')](IlliIlli[ll1lill1(0x1f5,'8Q!B')],IlliIlli[ll1lill1(0x13a,'0p93')])?lliII1ll[ll1lill1(0x1a0,'j2Xp')](l11I1ili,iiiI1Il1):console[ll1lill1(0x195,'@dYa')](I1ilI1il)));}var version_ = 'jsjiami.com.v7';

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
