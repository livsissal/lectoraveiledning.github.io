if (window.VarCurrentView) VarCurrentView.set('PhoneLandscape');
function init_PhoneLandscape() {
	if ( rcdObj.view != 'PhoneLandscape' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_PhoneLandscape() {
	if ( rcdObj.view != 'PhoneLandscape' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
image110314.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj110314Img\" src=\"images/certificate6.jpg\" alt=\"certificate6\" title=\"certificate6\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 785px; height: 1016px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 785px; height: 1016px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj110314",
	bInsAnc:	0,
	cwObj:		{
		"name":	"certificate6"
	},
	objData:	{"a":[0,416,0,[0,0,785,1016]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":800,"height":1035}}
};
text110316.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 634px; min-height: 111px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 634px; min-height: 111px;\"><p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>Certificate of Completion</strong></span><span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 76px; top: 201px; width: 634px; height: 111px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj110316",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[76,201,634,111]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":205,"width":646,"height":113},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110317.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 634px; min-height: 79px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 634px; min-height: 79px;\"><p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>This certifies that</strong></span><span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 76px; top: 356px; width: 634px; height: 79px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj110317",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Body Text"
	},
	objData:	{"a":[0,32,0,[76,356,634,79]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":363,"width":646,"height":80},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110318.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 634px; min-height: 61px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 634px; min-height: 61px;\"><p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>" +  AICC_Student_Name.getValueForDisplay() + "</strong></span><span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 76px; top: 443px; width: 634px; height: 61px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj110318",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Student Name"
	},
	objData:	{"a":[0,32,0,[76,443,634,61]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":451,"width":646,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110319.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 634px; min-height: 55px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 634px; min-height: 55px;\"><p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>completed</strong></span><span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 76px; top: 511px; width: 634px; height: 55px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj110319",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Body Text1"
	},
	objData:	{"a":[0,32,0,[76,511,634,55]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":521,"width":646,"height":56},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110299.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 460px; min-height: 64px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 460px; min-height: 64px;\"><p leglh=\"1.720\" style=\"margin-left:0px;text-indent:0px;line-height:1.720;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:30pt; font-family:\'Arial Black\', sans-serif; color:#fbb040;\">COURSE TITLE \n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 163px; top: 592px; width: 460px; height: 64px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj110299",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,32,0,[163,592,460,64]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":83,"y":603,"width":635,"height":69},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110320.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 339px; min-height: 118px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 339px; min-height: 118px;\"><p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>on</strong></span><span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n<p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>" +  VarCurrentDate.getValueForDisplay() + "</strong></span><span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 223px; top: 698px; width: 339px; height: 118px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj110320",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Date"
	},
	objData:	{"a":[0,32,0,[223,698,339,118]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":228,"y":711,"width":345,"height":120},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image110295.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj110295Img\" src=\"images/fc_logo.png\" alt=\"fc_logo\" title=\"fc_logo\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 136px; height: 33px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 73px; top: 905px; width: 136px; height: 33px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj110295",
	bInsAnc:	0,
	cwObj:		{
		"name":	"fc_logo"
	},
	objData:	{"a":[0,288,0,[73,905,136,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":74,"y":922,"width":139,"height":34}}
};
rcdObj.rcdData.att_PhoneLandscape = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	25
};
rcdObj.pgWidth_PhoneLandscape = pgWidth_phoneLand;
rcdObj.preload_PhoneLandscape = ["images/fc_logo.png","images/certificate6.jpg"];
rcdObj.pgStyle_PhoneLandscape = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 1021px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_PhoneLandscape = ["#FFFFFF","",0,0,1];
