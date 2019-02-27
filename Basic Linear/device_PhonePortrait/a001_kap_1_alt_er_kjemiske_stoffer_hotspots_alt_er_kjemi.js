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
og2596.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2596",
	bInsAnc:	undefined,
	objData:	{"a":[0,96,0,[]],"bReadLast":false}
};
shape164.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 481 56\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(240.5 28)\" style=\"\">\n	<path d=\"M 0 0 L 480 0 L 480 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(255, 255, 255); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-240, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(240.5 28)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"8.016666466250001\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.53\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -0.5px; top: -0.4999999999998792px; width: 481px; height: 56px; z-index: 30; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj164",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header_Background"
	},
	objData:	{"a":[0,1048800,0,[-0.5,-0.4999999999998792,481,56]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.300000","depth":0,"color":"#000000","blurradius":6,"shadowtype":2,"bHasShadow":true,"dir":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1010,"height":56},"btnState":"disabled","altValue":"Header_Background","titleValue":"Header_Background","fallbackImg":"<img src=\"images/desktop_shape164.png\" alt=\"Header_Background\" title=\"Header_Background\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton116700.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 81 20\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(40.5 10)\" style=\"\">\n	<path d=\"M 4.75 0 L 75.25 0 A 4.75 4.75 0 0 1 80 4.75 L 80 14.25 A 4.75 4.75 0 0 1 75.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-40, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(40.5 10)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"8.0999997975\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-34.45\" y=\"2.55\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 5.5px; top: 8.500000000000021px; width: 81px; height: 20px; z-index: 31; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj116700",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hovedmeny knapp",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('a001_intro_innhold.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1081440,0,[5.5,8.500000000000021,81,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":12,"y":9,"width":170,"height":41},"imgDataNormal":"images/desktop_shape116700.png","imgDataOver":"images/desktop_shape116700.png","imgDataDown":"images/desktop_shape116700.png","imgDataDisabled":"images/desktop_shape116700_disabled.png","svgDataNormal":"<g transform=\"translate(40.5 10)\" style=\"\">\n\t<path d=\"M 4.75 0 L 75.25 0 A 4.75 4.75 0 0 1 80 4.75 L 80 14.25 A 4.75 4.75 0 0 1 75.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-40, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(40.5 10)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"8.0999997975\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-34.45\" y=\"2.55\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(40.5 10)\" style=\"\">\n\t<path d=\"M 4.75 0 L 75.25 0 A 4.75 4.75 0 0 1 80 4.75 L 80 14.25 A 4.75 4.75 0 0 1 75.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-40, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(40.5 10)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"8.0999997975\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-34.45\" y=\"2.55\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(40.5 10)\" style=\"\">\n\t<path d=\"M 4.75 0 L 75.25 0 A 4.75 4.75 0 0 1 80 4.75 L 80 14.25 A 4.75 4.75 0 0 1 75.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-40, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(40.5 10)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"8.0999997975\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-34.45\" y=\"2.55\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(40.5 10)\" style=\"\">\n\t<path d=\"M 4.75 0 L 75.25 0 A 4.75 4.75 0 0 1 80 4.75 L 80 14.25 A 4.75 4.75 0 0 1 75.25 19 L 4.75 19 A 4.75 4.75 0 0 1 0 14.25 L 0 4.75 A 4.75 4.75 0 0 1 4.75 0 Z\" style=\"stroke: rgb(0, 0, 0); stroke-width: 1px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-40, -9.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(40.5 10)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"8.0999997975\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(51,51,51); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-34.45\" y=\"2.55\" fill=\"#333333\">GÅ TIL FORSIDEN</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"GÅ TIL FORSIDEN","titleValue":"GÅ TIL FORSIDEN","fallbackImg":"<img alt=\"Hovedmeny knapp\" title=\"Hovedmeny knapp\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1733.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_104429_104266_9526\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9526); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 249px; top: 8.000000000000007px; width: 40px; height: 40px; z-index: 32; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1733",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_SoundOn",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar_sound_enabled_1',actItem:function(){ Varsound_enabled.set('1'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkUnmuteMed',actItem:function(){ {trivPage.actionMute(0);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide_this',actItem:function(){ textbutton1733.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow_sound_off',actItem:function(){ textbutton2012.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1083840,0,[249,8.000000000000007,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":237,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape1733.png","imgDataOver":"images/desktop_shape1733_over.png","imgDataDown":"images/desktop_shape1733.png","imgDataDisabled":"images/desktop_shape1733_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9526\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9526); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9528\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9528); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9530\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9530); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9532\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_mute_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9532); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_SoundOn","titleValue":"Button_SoundOn","fallbackImg":"<img alt=\"Button_SoundOn\" title=\"Button_SoundOn\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton2012.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_104429_104266_9534\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9534); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 249px; top: 8.000000000000007px; width: 40px; height: 40px; z-index: 33; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2012",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_SoundOff",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar_sound_enabled_0',actItem:function(){ Varsound_enabled.set('0'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkMuteMed',actItem:function(){ {trivPage.actionMute(1);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide_this',actItem:function(){ textbutton2012.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow_sound_on',actItem:function(){ textbutton1733.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1083840,0,[249,8.000000000000007,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":237,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape2012.png","imgDataOver":"images/desktop_shape2012_over.png","imgDataDown":"images/desktop_shape2012.png","imgDataDisabled":"images/desktop_shape2012_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9534\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9534); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9536\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9536); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9538\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9538); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9540\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_sound_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9540); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_SoundOff","titleValue":"Button_SoundOff","fallbackImg":"<img alt=\"Button_SoundOff\" title=\"Button_SoundOff\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image387.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj387Img\" src=\"images/icn_devider.png\" alt=\"icn_devider\" title=\"icn_devider\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 38px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 311px; top: 10px; width: 30px; height: 38px; z-index: 34;",
	cssClasses:	"",
	htmlId:		"tobj387",
	bInsAnc:	0,
	cwObj:		{
		"name":	"icn_devider"
	},
	objData:	{"a":[0,1051104,0,[311,10,30,38]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":176,"y":9,"width":30,"height":38}}
};
textbutton563.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_104429_104266_9542\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9542); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 357px; top: 8.000000000000007px; width: 40px; height: 40px; z-index: 35; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj563",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_Back",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowSetState_disable',actItem:function(){ if(VarPageInTitle.equals('1'))textbutton563.setState('disabled');else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo_previous_page',actItem:function(){ trivExitPage('a001_intro_innhold.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1083872,0,[357,8.000000000000007,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":131,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape563.png","imgDataOver":"images/desktop_shape563_over.png","imgDataDown":"images/desktop_shape563.png","imgDataDisabled":"images/desktop_shape563_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9542\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9542); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9544\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9544); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9546\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9546); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9548\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_back_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9548); fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.2;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_Back","titleValue":"Button_Back","fallbackImg":"<img alt=\"Button_Back\" title=\"Button_Back\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1166.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 40 40\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(20 20)\" style=\"\">\n	<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_104429_104266_9550\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9550); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(20 20)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 411px; top: 8.000000000000007px; width: 40px; height: 40px; z-index: 36; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1166",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button_Next",
		"arChld":
	[
		{type:6,on:11,delay:0,name:'OnPageShowSetState_disable',actItem:function(){ if(VarPageInTitle.equals(VarPagesInTitle.getValue()))textbutton1166.setState('disabled');else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkGoTo_next_page',actItem:function(){ trivExitPage('a001_kap_1_alt_er_kjemiske_stoffer_grunnstoffer_og_atomer.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,1083872,0,[411,8.000000000000007,40,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":77,"y":8,"width":40,"height":40},"imgDataNormal":"images/desktop_shape1166.png","imgDataOver":"images/desktop_shape1166_over.png","imgDataDown":"images/desktop_shape1166.png","imgDataDisabled":"images/desktop_shape1166_disabled.png","svgDataNormal":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9550\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9550); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9552\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9552); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9554\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9554); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(20 20)\" style=\"\">\n\t<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_104429_104266_9556\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"40\" height=\"40\" xlink:href=\"images/btn_next_normal.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 40 0 L 40 40 L 0 40 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(#SVGID_104429_104266_9556); fill-rule: nonzero; opacity: 0.2; pointer-events: auto;\" transform=\"translate(0 0) translate(-20, -20) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(20 20)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"7.9999998\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.2;\">\n\t\t\t<tspan x=\"0\" y=\"2.52\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Button_Next","titleValue":"Button_Next","fallbackImg":"<img alt=\"Button_Next\" title=\"Button_Next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
image116799.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj116799Img\" src=\"images/battery-22119_1920.jpg\" alt=\"battery-22119_1920\" title=\"battery-22119_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 156px; height: 102px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 311px; width: 156px; height: 102px; z-index: 0;",
	cssClasses:	"",
	htmlId:		"tobj116799",
	bInsAnc:	0,
	cwObj:		{
		"name":	"battery-22119_1920"
	},
	objData:	{"a":[0,288,0,[0,311,156,102]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":311,"width":327,"height":215}}
};
image116778.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj116778Img\" src=\"images/apple-1122537_1920.jpg\" alt=\"apple-1122537_1920\" title=\"apple-1122537_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 152px; height: 97px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 110px; width: 152px; height: 97px; z-index: 1;",
	cssClasses:	"",
	htmlId:		"tobj116778",
	bInsAnc:	0,
	cwObj:		{
		"name":	"apple-1122537_1920"
	},
	objData:	{"a":[0,288,0,[0,110,152,97]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":110,"width":319,"height":203}}
};
image116792.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj116792Img\" src=\"images/chemistry-1027781_1920.jpg\" alt=\"chemistry-1027781_1920\" title=\"chemistry-1027781_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 70px; height: 70px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 528px; width: 70px; height: 70px; z-index: 2;",
	cssClasses:	"",
	htmlId:		"tobj116792",
	bInsAnc:	0,
	cwObj:		{
		"name":	"chemistry-1027781_1920"
	},
	objData:	{"a":[0,288,0,[0,528,70,70]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":528,"width":148,"height":148}}
};
image116780.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj116780Img\" src=\"images/gummibarchen-318362_1920.jpg\" alt=\"gummibarchen-318362_1920\" title=\"gummibarchen-318362_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 174px; height: 116px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 306px; top: 419px; width: 174px; height: 116px; z-index: 3;",
	cssClasses:	"",
	htmlId:		"tobj116780",
	bInsAnc:	0,
	cwObj:		{
		"name":	"gummibarchen-318362_1920"
	},
	objData:	{"a":[0,288,0,[306,419,174,116]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":643,"y":419,"width":366,"height":243}}
};
image116782.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj116782Img\" src=\"images/road-1072823_1920.jpg\" alt=\"road-1072823_1920\" title=\"road-1072823_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 220px; height: 127px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 260px; top: 73px; width: 220px; height: 127px; z-index: 4;",
	cssClasses:	"",
	htmlId:		"tobj116782",
	bInsAnc:	0,
	cwObj:		{
		"name":	"road-1072823_1920"
	},
	objData:	{"a":[0,288,0,[260,73,220,127]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":547,"y":73,"width":462,"height":268}}
};
image116784.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj116784Img\" src=\"images/pills-3673645_1920.jpg\" alt=\"pills-3673645_1920\" title=\"pills-3673645_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 193px; height: 115px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 129px; top: 199px; width: 193px; height: 115px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj116784",
	bInsAnc:	0,
	cwObj:		{
		"name":	"pills-3673645_1920"
	},
	objData:	{"a":[0,288,0,[129,199,193,115]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":271,"y":199,"width":406,"height":242}}
};
image116786.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj116786Img\" src=\"images/lithium-2784853_1920.png\" alt=\"lithium-2784853_1920\" title=\"lithium-2784853_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 62px; height: 41px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 418px; top: 338px; width: 62px; height: 41px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj116786",
	bInsAnc:	0,
	cwObj:		{
		"name":	"lithium-2784853_1920"
	},
	objData:	{"a":[0,288,0,[418,338,62,41]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":879,"y":338,"width":130,"height":86}}
};
image116788.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj116788Img\" src=\"images/laboratory-1009190_1920.jpg\" alt=\"laboratory-1009190_1920\" title=\"laboratory-1009190_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 186px; height: 123px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 122px; top: 404px; width: 186px; height: 123px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj116788",
	bInsAnc:	0,
	cwObj:		{
		"name":	"laboratory-1009190_1920"
	},
	objData:	{"a":[0,288,0,[122,404,186,123]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":256,"y":404,"width":391,"height":258}}
};
image116790.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<img id=\"tobj116790Img\" src=\"images/dna-3539309_1920.jpg\" alt=\"dna-3539309_1920\" title=\"dna-3539309_1920\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 142px; height: 70px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 269px; top: 313px; width: 142px; height: 70px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj116790",
	bInsAnc:	0,
	cwObj:		{
		"name":	"dna-3539309_1920"
	},
	objData:	{"a":[0,288,0,[269,313,142,70]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":566,"y":313,"width":299,"height":148}}
};
audio104431.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div id=\"sndtobj104431\" style=\"position: absolute; left: 0px; top: 0px; width: 300px; height: 24px;\"></div>",
	cssText:	"position: absolute; left: 0px; top: -50px; width: 300px; height: 24px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj104431",
	bInsAnc:	0,
	stdHtml:	'<audio id="swftobj104431" name="swftobj104431" width="100%" height="100%" controls="controls" preload="none"><source type="audio/mpeg" src="media/silence.mp3" /></audio>',
	iosHtml:	'undefined',
	resource:	'media/silence.mp3',
	cwObj:		{
		"name":	"silence"
	},
	objData:	{"a":[0,131104,0,[0,-50,300,24,0]],"bLiveWin":1,"rcdOvr":{"res":0},"desktopRect":{"x":0,"y":-50,"width":300,"height":24},"iDisplay":2,"sndFile":"","hasEvents":0,"supportsEvents":true,"linkName":"media/silence.mp3","initHidden":false,"hasCaptions":false,"cssSkin":"trivantis-player.css","flashStreamer":"","bShowCCBackground":1,"ccBackgroundColor":"#000000","ccBackgroundOpacity":100,"hexToRgba":"rgba(0,0,0,1)","ccBackgroundColorZeroOpacity":"rgba(0,0,0,0)","bPooled":true,"skinHeight":24}
};
og104432.rcdData.att_PhonePortrait = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og104432",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
text104449.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 480px; height: 109px; background-color: rgb(251, 176, 64);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 13px; top: 13px; width: 454px; height: 109px;\"><p align=\"center\" leglh=\"1.384\" style=\"margin-left:0px;text-indent:0px;line-height:1.384;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:14pt; font-family:\'Arial Black\', sans-serif; color:#414042;\">Alt er kjemiske stoffer</span></p>\n\n<p align=\"center\" leglh=\"1.384\" style=\"margin-left:0px;text-indent:0px;line-height:1.384;margin-top:0px;margin-bottom:0px;\"><span style=\"font-family: Arial, sans-serif; color: rgb(88, 89, 91); font-size:10pt;\">Vi omgir oss med kjemiske stoffer hele tida. Noen er farlige for oss, men de fleste er helt nødvendige for at vi skal kunne leve. Det finnes ikke noe liv uten kjemiske stoffer.</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 152px; top: 99px; width: 480px; height: 117px; z-index: 10;",
	cssClasses:	"",
	htmlId:		"tobj104449",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Page_title"
	},
	objData:	{"a":[0,32,0,[152,99,480,109]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":320,"y":99,"width":239,"height":162},"dwTextFlags":0,"marginSize":13,"textPublishLang":"Inherit"}
};
textbutton111115.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 50 64\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(14.94 43.27)\" style=\"\">\n	<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 25)\">\n		<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 48.99999999999999px; top: 232px; width: 50px; height: 64px; z-index: 11; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj111115",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkSetState',actItem:function(){ textbutton111115.setState('disabled');
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow_popup',actItem:function(){ text111121.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[48.99999999999999,232,50,64]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.200000","depth":4,"color":"#333333","blurradius":4,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":214,"y":150,"width":50,"height":51},"imgDataNormal":"images/desktop_shape111115.png","imgDataOver":"images/desktop_shape111115_over.png","imgDataDown":"images/desktop_shape111115_down.png","imgDataDisabled":"images/desktop_shape111115_disabled.png","svgDataNormal":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 202, 123); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(222, 145, 29); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"●","titleValue":"●","fallbackImg":"<img alt=\"Hotspot_1\" title=\"Hotspot_1\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton111130.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 50 64\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(14.94 43.27)\" style=\"\">\n	<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 25)\">\n		<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 247px; top: 220px; width: 50px; height: 64px; z-index: 12; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj111130",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkSetState',actItem:function(){ textbutton111130.setState('disabled');
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow_popup',actItem:function(){ text111134.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[247,220,50,64]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.200000","depth":4,"color":"#333333","blurradius":4,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":424,"y":269,"width":50,"height":50},"imgDataNormal":"images/desktop_shape111130.png","imgDataOver":"images/desktop_shape111130_over.png","imgDataDown":"images/desktop_shape111130_down.png","imgDataDisabled":"images/desktop_shape111130_disabled.png","svgDataNormal":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 202, 123); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(222, 145, 29); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"●","titleValue":"●","fallbackImg":"<img alt=\"Hotspot_2\" title=\"Hotspot_2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton111139.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 50 64\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(14.94 43.27)\" style=\"\">\n	<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 25)\">\n		<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 371px; top: 229px; width: 50px; height: 64px; z-index: 13; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj111139",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkSetState',actItem:function(){ textbutton111139.setState('disabled');
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow_popup',actItem:function(){ text111143.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[371,229,50,64]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.200000","depth":4,"color":"#333333","blurradius":4,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":821,"y":155,"width":50,"height":50},"imgDataNormal":"images/desktop_shape111130.png","imgDataOver":"images/desktop_shape111130_over.png","imgDataDown":"images/desktop_shape111130_down.png","imgDataDisabled":"images/desktop_shape111130_disabled.png","svgDataNormal":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 202, 123); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(222, 145, 29); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"●","titleValue":"●","fallbackImg":"<img alt=\"Hotspot_3\" title=\"Hotspot_3\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton111148.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 50 64\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(14.94 43.27)\" style=\"\">\n	<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 25)\">\n		<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 79px; top: 343px; width: 50px; height: 64px; z-index: 14; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj111148",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkSetState',actItem:function(){ textbutton111148.setState('disabled');
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow_popup',actItem:function(){ text111152.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[79,343,50,64]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.200000","depth":4,"color":"#333333","blurradius":4,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":365,"y":408,"width":50,"height":50},"imgDataNormal":"images/desktop_shape111130.png","imgDataOver":"images/desktop_shape111130_over.png","imgDataDown":"images/desktop_shape111130_down.png","imgDataDisabled":"images/desktop_shape111130_disabled.png","svgDataNormal":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 202, 123); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(222, 145, 29); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"●","titleValue":"●","fallbackImg":"<img alt=\"Hotspot_4\" title=\"Hotspot_4\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton111157.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<svg viewBox=\"0 0 50 64\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(14.94 43.27)\" style=\"\">\n	<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 25)\">\n		<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 321px; top: 341px; width: 50px; height: 64px; z-index: 15; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj111157",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_5",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkSetState',actItem:function(){ textbutton111157.setState('disabled');
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow_popup',actItem:function(){ text111161.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32800,0,[321,341,50,64]],"rcdOvr":{"res":0},"shadoweffect":{"opacity":"0.200000","depth":4,"color":"#333333","blurradius":4,"shadowtype":2,"bHasShadow":true,"dir":270},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":953,"y":319,"width":50,"height":50},"imgDataNormal":"images/desktop_shape111130.png","imgDataOver":"images/desktop_shape111130_over.png","imgDataDown":"images/desktop_shape111130_down.png","imgDataDisabled":"images/desktop_shape111130_disabled.png","svgDataNormal":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 202, 123); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(222, 145, 29); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(14.94 43.27)\" style=\"\">\n\t<path d=\"M 29.88 49.52 A 25 25 0 1 0 20.12 49.52 L 25 64 L 29.88 49.52 Z\" style=\"stroke: rgb(251, 176, 64); stroke-width: 0px; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(251, 176, 64); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-14.939309249424072, -43.27454696713615) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 25)\">\n\t\t<text font-family=\"Arial\" font-size=\"26.666666\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-8.15\" y=\"8.4\" fill=\"#FFFFFF\">●</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"●","titleValue":"●","fallbackImg":"<img alt=\"Hotspot_5\" title=\"Hotspot_5\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text111121.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 480px; height: 289px; background-color: rgb(251, 176, 64);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 30px; top: 30px; width: 420px; height: 229px;\"><p align=\"right\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial Black\', sans-serif; color:#ffffff;\">X</span><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\"> </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#414042;\">Eple, frukt, mat direkte fra naturen</span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">______________________________________________________________________________________ </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">&nbsp; </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">Eplet består av kjemiske stoffer laget av naturen selv. Eple inneholder bl.a karbohydrater og vitaminer</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 0px; top: 175px; width: 480px; height: 289px; z-index: 16; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj111121",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_popup_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ if( text111121.eatOnUp==true ){
        text111121.eatOnUp=false;
        return;
    }
    {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[0,175,480,289]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":244,"width":350,"height":180},"dwTextFlags":0,"marginSize":30,"textPublishLang":"Inherit"}
};
text111134.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 480px; height: 289px; background-color: rgb(251, 176, 64);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 30px; top: 30px; width: 420px; height: 229px;\"><p align=\"right\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial Black\', sans-serif; color:#ffffff;\">X</span><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\"> </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:10pt; font-family: Arial, sans-serif; caret-color: rgb(65, 64, 66); color: rgb(65, 64, 66);\">Medisiner</span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">______________________________________________________________________________________ </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">&nbsp; </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">Alle medisiner er laget ved hjelp av kjemiske prosesser. Ca halvparten av medisinene er laget fra naturlige råvarer, mens den andre halvparten er laget fra bunnen av fra syntetiske stoffer.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 0px; top: 175px; width: 480px; height: 289px; z-index: 17; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj111134",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_popup_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ if( text111134.eatOnUp==true ){
        text111134.eatOnUp=false;
        return;
    }
    {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[0,175,480,289]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":402,"y":377,"width":350,"height":180},"dwTextFlags":0,"marginSize":30,"textPublishLang":"Inherit"}
};
text111143.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 480px; height: 289px; background-color: rgb(251, 176, 64);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 30px; top: 30px; width: 420px; height: 229px;\"><p align=\"right\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial Black\', sans-serif; color:#ffffff;\">X</span><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\"> </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#414042;\">Naturen</span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">______________________________________________________________________________________ </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">&nbsp; </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-family: Arial, sans-serif; font-size:12pt; color: rgb(255, 255, 255);\">......er full av kjemiske stoffer! Visste du f.eks at trær kan sende ut kjemiske&nbsp;</span><span style=\"font-family: Arial, sans-serif; font-size:12pt; color: rgb(255, 255, 255);\">stoff</span><span style=\"font-family: Arial, sans-serif; font-size:12pt; color: rgb(255, 255, 255);\">&nbsp;for å beskytte territoriet sitt?&nbsp;</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 0px; top: 175px; width: 480px; height: 289px; z-index: 18; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj111143",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_popup_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ if( text111143.eatOnUp==true ){
        text111143.eatOnUp=false;
        return;
    }
    {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[0,175,480,289]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":328,"y":198,"width":350,"height":180},"dwTextFlags":0,"marginSize":30,"textPublishLang":"Inherit"}
};
text111152.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 480px; height: 289px; background-color: rgb(251, 176, 64);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 30px; top: 30px; width: 420px; height: 229px;\"><p align=\"right\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial Black\', sans-serif; color:#ffffff;\">X</span><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\"> </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size:10pt; background-color: transparent; caret-color: rgb(65, 64, 66); color: rgb(65, 64, 66); font-family: Arial, sans-serif;\">Kjemi på laboratoriet</span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\"color: rgb(255, 255, 255); font-size:10pt; background-color: transparent;\">______________________________________________________________________________________</span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">&nbsp; </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">Det er nesten bare kreativiteten som setter grenser for hvilke stoffer som kan lages i et kjemisk laboratorium. Kanskje det blir du som&nbsp;en dag syntetiserer enda et nytt stoff?&nbsp;</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 0px; top: 175px; width: 480px; height: 289px; z-index: 19; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj111152",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_popup_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ if( text111152.eatOnUp==true ){
        text111152.eatOnUp=false;
        return;
    }
    {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[0,175,480,289]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":65,"y":482,"width":350,"height":180},"dwTextFlags":0,"marginSize":30,"textPublishLang":"Inherit"}
};
text111161.rcdData.att_PhonePortrait = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; cursor: pointer; width: 480px; height: 289px; background-color: rgb(251, 176, 64);\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 30px; top: 30px; width: 420px; height: 229px;\"><p align=\"right\" leglh=\"1.445\" style=\"margin-left:0px;text-indent:0px;line-height:1.173;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial Black\', sans-serif; color:#ffffff;\">X</span><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\"> </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#414042;\">Atomer&nbsp;</span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">______________________________________________________________________________________ </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">&nbsp; </span></p>\n\n<p align=\"left\" leglh=\"1.156\" style=\"margin-left:0px;text-indent:0px;line-height:0.938;margin-top:0px;margin-bottom:0px;\"><span style=\" font-size:10pt; font-family:\'Arial\', sans-serif; color:#ffffff;\">Atom betyr \"udelelig\" og lenge trodde man at atomene var de minste delene som alt besto av. I dag vet vi at atomene består av protoner, nøytroner og elektroner.</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 0px; top: 175px; width: 480px; height: 289px; z-index: 20; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj111161",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Hotspot_popup_5",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkRunActGrp_reset_stage',actItem:function(){ if( text111161.eatOnUp==true ){
        text111161.eatOnUp=false;
        return;
    }
    {og104432.issueActions(1001);}
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[0,175,480,289]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":659,"y":424,"width":350,"height":180},"dwTextFlags":0,"marginSize":30,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_PhonePortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"Arial,sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	25
};
rcdObj.pgWidth_PhonePortrait = pgWidth_phonePort;
rcdObj.preload_PhonePortrait = ["images/icn_devider.png","images/btn_back_normal.png","images/btn_back_hover.png","images/btn_next_normal.png","images/btn_next_hover.png","images/btn_mute_normal.png","images/btn_mute_hover.png","images/btn_sound_normal.png","images/btn_sound_hover.png","images/apple-1122537_1920.jpg","images/gummibarchen-318362_1920.jpg","images/road-1072823_1920.jpg","images/pills-3673645_1920.jpg","images/lithium-2784853_1920.png","images/laboratory-1009190_1920.jpg","images/dna-3539309_1920.jpg","images/chemistry-1027781_1920.jpg","images/battery-22119_1920.jpg"];
rcdObj.pgStyle_PhonePortrait = 'position: absolute; left: 0px; top: 0px; width: 480px; height: 560px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_PhonePortrait = ["#FFFFFF","",0,0,1];
