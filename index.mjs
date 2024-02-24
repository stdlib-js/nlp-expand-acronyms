// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uppercase@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-lowercase@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/nlp-tokenize@v0.2.1-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";var n={afaik:"as far as I know",afk:"away from keyboard",ama:"ask me anything",asap:"as soon as possible",b2b:"business to business",bbl:"be back later",bbs:"be back soon",bday:"birthday",brb:"be right back",btw:"by the way",cc:"carbon copy",cmon:"come on",cu:"see you",cya:"see you",cys:"check your settings",d2d:"direct to direct",dr:"doctor",e2e:"end to end",faq:"frequently asked question",fav:"favorite",favs:"favorites",ffs:"for f*ck's sake",foaf:"friend of a friend",ftw:"for the win",fyi:"for your information",g2g:"got to go",g2m:"got to meet you",gj:"good job",gm:"good morning",gmta:"great minds think alike",hth:"hope this helps",ianal:"I am not a lawyer",ianars:"I am not a rocket scientist",ic:"I see",icymi:"in case you missed it",idk:"i do not know",iirc:"if I recall correctly",ikr:"i know right",imho:"in my humble opinion",imnsho:"in my not so humble opinion",imo:"in my opinion",iow:"in other words",irl:"in real life",jj:"just joking",jk:"just kidding",jooc:"just out of curiosity",kk:"okay",l8:"late",l8r:"later",lmao:"laugh my a** off",lol:"laughing out loud",mfw:"my face when",myob:"mind your own business",nm:"never mind",noyb:"none of your business",np:"no problem",nvm:"never mind",oic:"oh, i see",omfg:"oh my f*cking god",omg:"oh my god",omw:"on my way",ooc:"out of character",oof:"out of focus",ot:"off topic",otoh:"on the other hand",p2p:"peer to peer",pfo:"please f*ck off",pita:"pain in the a**",plz:"please",pms:"personal messages",r8:"right",rofl:"rolling on the floor laughing",roflmao:"rolling on the floor laughing my a** off",rp:"reply",rps:"rock paper scissors",rpsls:"rock paper scissors lizard spock",rtfa:"read the f*cking article",rtfm:"read the f*cking manual",ru:"are you",s2s:"same to same",smh:"shake my head",tbh:"to be honest",thx:"thanks",tia:"thanks in advance",tldr:"too long did not read",ttyl:"talk to you later",wtf:"what the f*ck",wtg:"way to go",wtgp:"way to go pal",ymmv:"your mileage may vary"},a=o(n);function m(o){var m,l,f,d,h,c;if(!i(o))throw new TypeError(r("1dh3B",o));for(f="",m=s(o,!0),h=0;h<m.length;h++){if(l=m[h],e(l)){for(c=0;c<a.length;c++)if(d=a[c],t(l)===d){l=n[d];break}}else for(c=0;c<a.length;c++)if(l===(d=a[c])){l=n[d];break}f+=l}return f}export{m as default};
//# sourceMappingURL=index.mjs.map
