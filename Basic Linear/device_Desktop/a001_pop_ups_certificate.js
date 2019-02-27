if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
image110314.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj110314Img\" src=\"images/certificate6.jpg\" alt=\"certificate6\" title=\"certificate6\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 800px; height: 1035px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 800px; height: 1035px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj110314",
	bInsAnc:	0,
	cwObj:		{
		"name":	"certificate6"
	},
	objData:	{"a":[0,416,0,[0,0,800,1035]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":800,"height":1035}}
};
text110316.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 646px; min-height: 113px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 646px; min-height: 113px;\"><p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>Certificate of Completion</strong></span><span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 77px; top: 205px; width: 646px; height: 113px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj110316",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[77,205,646,113]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":205,"width":646,"height":113},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110317.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 646px; min-height: 80px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 646px; min-height: 80px;\"><p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>This certifies that</strong></span><span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 77px; top: 363px; width: 646px; height: 80px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj110317",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Body Text"
	},
	objData:	{"a":[0,32,0,[77,363,646,80]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":363,"width":646,"height":80},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110318.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 646px; min-height: 62px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 646px; min-height: 62px;\"><p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>" +  AICC_Student_Name.getValueForDisplay() + "</strong></span><span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 77px; top: 451px; width: 646px; height: 62px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj110318",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Student Name"
	},
	objData:	{"a":[0,32,0,[77,451,646,62]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":451,"width":646,"height":62},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110319.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 646px; min-height: 56px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 646px; min-height: 56px;\"><p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>completed</strong></span><span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 77px; top: 521px; width: 646px; height: 56px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj110319",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Body Text1"
	},
	objData:	{"a":[0,32,0,[77,521,646,56]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":521,"width":646,"height":56},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110299.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 635px; min-height: 69px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 635px; min-height: 69px;\"><p leglh=\"1.720\" style=\"margin-left:0px;text-indent:0px;line-height:1.720;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:30pt; font-family:\'Arial Black\', sans-serif; color:#fbb040;\">COURSE TITLE \n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 83px; top: 603px; width: 635px; height: 69px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj110299",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Title"
	},
	objData:	{"a":[0,32,0,[83,603,635,69]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":83,"y":603,"width":635,"height":69},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text110320.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 345px; min-height: 120px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 345px; min-height: 120px;\"><p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>on</strong></span><span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n<p leglh=\"1.284\" style=\"margin-left:0px;text-indent:0px;line-height:1.284;margin-top:0px;margin-bottom:0px;\" align=\"center\">\n<span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000; \"><strong>" +  VarCurrentDate.getValueForDisplay() + "</strong></span><span style=\" font-size:24pt; font-family:\'Arial, sans-serif\', sans-serif; color:#000000;\">\n</span></p>\n</div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 228px; top: 711px; width: 345px; height: 120px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj110320",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Date"
	},
	objData:	{"a":[0,32,0,[228,711,345,120]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":228,"y":711,"width":345,"height":120},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
image110295.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj110295Img\" src=\"images/fc_logo.png\" alt=\"fc_logo\" title=\"fc_logo\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 139px; height: 34px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 74px; top: 922px; width: 139px; height: 34px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj110295",
	bInsAnc:	0,
	cwObj:		{
		"name":	"fc_logo"
	},
	objData:	{"a":[0,288,0,[74,922,139,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":74,"y":922,"width":139,"height":34}}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	24
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/fc_logo.png","images/certificate6.jpg"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 800px; height: 1035px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFAF5","",0,0,1];
