if (window.VarCurrentView) VarCurrentView.set('PhonePortrait');
function init_PhonePortrait() {
	if ( rcdObj.view != 'PhonePortrait' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_PhonePortrait() {
	if ( rcdObj.view != 'PhonePortrait' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
image110314.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj110314Img\" src=\"images/certificate6.jpg\" alt=\"certificate6\" title=\"certificate6\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 480px; height: 621px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 480px; height: 621px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj110314",
	bInsAnc:	0,
	cwObj:		{
		"name":	"certificate6"
	},
	objData:	{"a":[0,416,0,[0,0,480,621]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":800,"height":1035}}
};
text110316.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 388px; min-height: 68px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 388px; min-height: 68px;\"><p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:19pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>Certificate of Completion</strong></span><span style=\" font-size:19pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 46px; top: 75px; width: 388px; height: 68px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj110316",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[46,75,388,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":205,"width":646,"height":113},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110317.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 388px; min-height: 48px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 388px; min-height: 48px;\"><p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:19pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>This certifies that</strong></span><span style=\" font-size:19pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 46px; top: 196px; width: 388px; height: 48px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj110317",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Body Text"
	},
	objData:	{"a":[0,32,0,[46,196,388,48]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":363,"width":646,"height":80},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110318.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 388px; min-height: 37px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 388px; min-height: 37px;\"><p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:19pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>" +  AICC_Student_Name.getValueForDisplay() + "</strong></span><span style=\" font-size:19pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 46px; top: 254px; width: 388px; height: 37px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj110318",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Student Name"
	},
	objData:	{"a":[0,32,0,[46,254,388,37]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":451,"width":646,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110319.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 388px; min-height: 34px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 388px; min-height: 34px;\"><p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:19pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>completed</strong></span><span style=\" font-size:19pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 46px; top: 312px; width: 388px; height: 34px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj110319",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Body Text1"
	},
	objData:	{"a":[0,32,0,[46,312,388,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":521,"width":646,"height":56},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110299.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 380px; min-height: 79px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 380px; min-height: 79px;\"><p leglh=\"1.720\" style=\"margin-left:0px;text-indent:0px;line-height:1.720;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:24pt; font-family:\'Arial Black\', sans-serif; color:#fbb040;\">COURSE TITLE \n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 130px; width: 380px; height: 79px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj110299",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,32,0,[50,130,380,79]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":83,"y":603,"width":635,"height":69},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110320.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 325px; min-height: 128px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 325px; min-height: 128px;\"><p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:19pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>on</strong></span><span style=\" font-size:19pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n<p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:19pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>" +  VarCurrentDate.getValueForDisplay() + "</strong></span><span style=\" font-size:19pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 78px; top: 371px; width: 325px; height: 128px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj110320",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Date"
	},
	objData:	{"a":[0,32,0,[78,371,325,128]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":228,"y":711,"width":345,"height":120},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image110295.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj110295Img\" src=\"images/fc_logo.png\" alt=\"fc_logo\" title=\"fc_logo\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 139px; height: 34px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 59px; top: 531px; width: 139px; height: 34px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj110295",
	bInsAnc:	0,
	cwObj:		{
		"name":	"fc_logo"
	},
	objData:	{"a":[0,288,0,[59,531,139,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":74,"y":922,"width":139,"height":34}}
};
rcdObj.rcdData.att_PhonePortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	25
};
rcdObj.pgWidth_PhonePortrait = pgWidth_phonePort;
rcdObj.preload_PhonePortrait = ["images/fc_logo.png","images/certificate6.jpg"];
rcdObj.pgStyle_PhonePortrait = 'position: absolute; left: 0px; top: 0px; width: 480px; height: 763px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_PhonePortrait = ["#FFFFFF","",0,0,1];
