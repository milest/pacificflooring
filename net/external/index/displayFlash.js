function displayFlash(flashfile, flashid, flashwidth, flashheight, flashvars, align) {
	if (align == 'notransparency') {
		wmode = 'opaque'
	} else {
		wmode = 'transparent';
	}
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,28,0" id="'+flashid+'" width="'+flashwidth+'" height="'+flashheight+'">\n');
	document.write('<param name="movie" value="'+flashfile+'" />');
	document.write('<param name="bgcolor" value="#FFFFFF" />');
	document.write('<param name="quality" value="best" />');
	document.write('<param name="devicefont" value="true" />');
	document.write('<param name="wmode" value="'+wmode+'" />');
	document.write('<param name="allowscriptaccess" value="samedomain" />');
	document.write('<param name="FlashVars" value="'+flashvars+'"/>');
	if (align == 'exactfit') {
		document.write('<param name="scale" value="exactFit" />');
	} else {
		document.write('<param name="scale" value="noscale" />');
	}
	document.write('<param name="salign" value="l" />');
	document.write('<embed src="'+flashfile+'" quality="best" salign="l" flashVars="'+flashvars+'" width="'+flashwidth+'" height="'+flashheight+'" name="'+flashid+'" align="'+align+'" wmode="'+wmode+'" allowScriptAccess="sameDomain" allowFullScreen="true" scale="noscale" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" /><noembed></noembed></embed>');
	document.write('</object>');
}

function createFlashVar(flashfile, flashid, flashwidth, flashheight, flashvars, align) {
		thisvar = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" id="'+flashid+'" width="'+flashwidth+'" height="'+flashheight+'" align="'+align+'">\n';
		thisvar = thisvar + '<param name="movie" value="'+flashfile+'" />';
		thisvar = thisvar + '<param name="bgcolor" value="#FFFFFF" />';
		thisvar = thisvar + '<param name="quality" value="best" />';
		thisvar = thisvar + '<param name="devicefont" value="true" />';
		thisvar = thisvar + '<param name="wmode" value="transparent" />';
		thisvar = thisvar + '<param name="allowscriptaccess" value="samedomain" />';
		thisvar = thisvar + '<param name="FlashVars" value="'+flashvars+'"/>';
		thisvar = thisvar + '<param name="scale" value="noscale" />';
		thisvar = thisvar + '<param name="salign" value="l" />';
		thisvar = thisvar + '<embed src="'+flashfile+'" quality="best" salign="l" flashVars="'+flashvars+'" width="'+flashwidth+'" height="'+flashheight+'" name="'+flashid+'" align="'+align+'" wmode="transparent" allowScriptAccess="sameDomain" allowFullScreen="true" scale="noscale" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" /><noembed></noembed></embed>';
		thisvar = thisvar + '</object>';
		
		return thisvar;
}

function playVideo(videofile,videoid) {
	displayFlash('/net/external/index/VideoPlayer.swf',videoid,450,372,'&video='+videofile,'');
}

function displayFlashResizable(flashfile, flashid, flashwidth, flashheight, flashvars, align) {
	document.write('<div id="div'+flashid+'" style="position:relative; width:'+flashwidth+'px; height:'+flashheight+'px; z-index:1">\n');
	document.write('<table  height="100%" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td>\n');
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" id="'+flashid+'" width="100%" height="100%"">\n');
	document.write('<param name="movie" value="'+flashfile+'" />\n');
	document.write('<param name="bgcolor" value="#FFFFFF" />\n');
	document.write('<param name="quality" value="best" />\n');
	document.write('<param name="devicefont" value="true" />\n');
	document.write('<param name="wmode" value="transparent" />\n');
	document.write('<param name="allowscriptaccess" value="samedomain" />\n');
	document.write('<param name="FlashVars" value="'+flashvars+'&id='+flashid+'"/>\n');
	document.write('<param name="scale" value="noscale" />\n');
	document.write('<param name="salign" value="LT" />\n');
	document.write('<embed src="'+flashfile+'" quality="best" salign="LT" flashVars="'+flashvars+'&id='+flashid+'" width="100%" height="100%" name="'+flashid+'" wmode="transparent" allowScriptAccess="sameDomain" scale="noscale" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
	document.write('<noembed></noembed></embed>\n');
	document.write('</object>\n');
	document.write('</td></tr></table>\n</div>');	
}

function resizeFlash(flashid, newwidth, newheight) {
	if(document.all && !document.getElementById) {
 		document.all['div'+flashid].style.pixelWidth = newwidth;
 		document.all['div'+flashid].style.pixelHeight = newheight;
	} else {
		document.getElementById('div'+flashid).style.width = newwidth;
		document.getElementById('div'+flashid).style.height = newheight;
	}
}

function playMovie(moviefile, movieid, moviewidth, movieheight) {
	document.write('<object id="'+movieid+'" classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701" type="application/x-oleobject" width="'+moviewidth+'" height="'+movieheight+'">');
	document.write('<param name="FileName" value="'+moviefile+'">');
	document.write('<param name="AutoStart" value="-1">');
	document.write('<param name="ShowStatusBar" value="-1">');
	document.write('<param name="ShowControls" value="1">');
	document.write('<param name="ShowDisplay" value="0">');
	document.write('<param name="AudioStream" value="-1">');
	document.write('<param name="AutoSize" value="1">');
	document.write('<param name="WindowlessVideo" value="1">');
	document.write('<src="'+moviefile+'">');
	document.write('<embed width="'+moviewidth+'" height="'+movieheight+'" filename="'+moviefile+'" autostart="1" showstatusbar="0" showcontrols="1" showdisplay="0">');
	document.write('</embed></object>');
}

function uploadFiles(uploadDirectory, successURL, imagefilterenabled) {
	var _info = navigator.userAgent;
	var _ns = false;
	var _ns6 = false;
	var _ie = (_info.indexOf("MSIE") > 0 && _info.indexOf("Win") > 0 && _info.indexOf("Windows 3.1") < 0);
	var _ns = (navigator.appName.indexOf("Netscape") >= 0 && ((_info.indexOf("Win") > 0 && _info.indexOf("Win16") < 0 && java.lang.System.getProperty("os.version").indexOf("3.5") < 0) || (_info.indexOf("Sun") > 0) || (_info.indexOf("Linux") > 0) || (_info.indexOf("AIX") > 0) || (_info.indexOf("OS/2") > 0) || (_info.indexOf("IRIX") > 0)));
	var _ns6 = ((_ns == true) && (_info.indexOf("Mozilla/5") >= 0));
	vusername = "PrT7JmiC4ao=";
	vpassword = "y6Ho613/9ig=";
	vhost = "NZTAs29oNYQKng5eSFPKdpIHDAwaRWW3";
	vkey = "sOwg//pmKGOfChzfIfYOMA==";
	document.write('<span style="font-family: arial; font-size:12px;">PLEASE NOTE:  The features of this uploader requires Java(tm) to be installed.  To install, go here: <a href="http://www.java.com" target="_blank">http://www.java.com</a></span><br>');
	if (_ie == true) {
		document.write('<object classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" width="100%" height="250" name="uploadApplet"  codebase="http://java.sun.com/update/1.5.0/jinstall-1_5-windows-i586.cab#Version=5,0,0,7">');
		document.write('<param name="code" value="com.javaatwork.myftpuploader.MyFTPUploader.class">');
		document.write('<param name="archive" value="/net/ZUpload/MyFTPUploader131/myftpuploader-standard-signed-v131.jar, /net/ZUpload/MyFTPUploader131/labels.jar">');
		document.write('<param name="name" value="uploadApplet">');
		document.write('<param name="type" value="application/x-java-applet;version=1.5">');
		document.write('<param name="scriptable" value="false">');

		document.write('<param name="asciiFileExtensions" value="txt, html, htm, xml">');
		document.write('<param name="automaticLogin" value="true">');
		document.write('<param name="userName" value="'+vusername+'">');
		document.write('<param name="password" value="'+vpassword+'">');
		document.write('<param name="host" value="'+vhost+'">');
		document.write('<param name="key" value="'+vkey+'">');
		document.write('<param name="uploadDirectories" value="false">');
		document.write('<param name="uploadDirectory" value="/'+uploadDirectory+'">');
		document.write('<param name="successURL" value="'+successURL+'">');
		document.write('<param name="backgroundColor" value="#ffffff">');
		document.write('<param name="deleteOnCancel" value="true">');
		document.write('<param name="nameConflict" value="overwrite">');
		if (imagefilterenabled == true) {
			document.write('<param name="fileFilter" value="Image files (*.jpg, *.jpeg, *.gif): jpg, jpeg, gif">');
		}
		document.write('<param name="iconAdd" value="http://www.javaatwork.com/images/add.gif">');
		document.write('<param name="iconRemove" value="http://www.javaatwork.com/images/remove.gif">');
		document.write('<param name="iconUpload" value="http://www.javaatwork.com/images/upload.gif">');
		document.write('<param name="maxByteSize" value="1000">');
		document.write('<param name="maxFileSize" value="10000">');
		document.write('<param name="rejectFileFilter" value="exe, bat, com, lnk, pif, vbs, asp, aspx">');
		document.write('<param name="serverType" value="ftp">');
		document.write('<param name="showThumbNailsInApplet" value="true">');
		document.write('<param name="showThumbNailsInFileDialog" value="false">');
		document.write('<param name="transferType" value="automatic">');

		document.writeln('</object>');
	} else {
		document.write('<applet name="MyFTPUploader" code="com.javaatwork.myftpuploader.MyFTPUploader.class" archive="/net/ZUpload/MyFTPUploader131/myftpuploader-standard-signed-v131.jar, /net/ZUpload/MyFTPUploader131/labels.jar" width="100%"  height="250">');
		document.write('<param name="asciiFileExtensions" value="txt, html, htm, xml">');
		document.write('<param name="automaticLogin" value="true">');
		document.write('<param name="userName" value="'+vusername+'">');
		document.write('<param name="password" value="'+vpassword+'">');
		document.write('<param name="host" value="'+vhost+'">');
		document.write('<param name="key" value="'+vkey+'">');
		document.write('<param name="uploadDirectories" value="false">');
		document.write('<param name="uploadDirectory" value="/'+uploadDirectory+'">');
		document.write('<param name="successURL" value="'+successURL+'">');
		document.write('<param name="backgroundColor" value="#ffffff">');
		document.write('<param name="deleteOnCancel" value="true">');
		document.write('<param name="nameConflict" value="overwrite">');
		if (imagefilterenabled == true) {
			document.write('<param name="fileFilter" value="Image files (*.jpg, *.jpeg, *.gif): jpg, jpeg, gif">');
		}
		document.write('<param name="iconAdd" value="http://www.javaatwork.com/images/add.gif">');
		document.write('<param name="iconRemove" value="http://www.javaatwork.com/images/remove.gif">');
		document.write('<param name="iconUpload" value="http://www.javaatwork.com/images/upload.gif">');
		document.write('<param name="maxByteSize" value="1000">');
		document.write('<param name="maxFileSize" value="10000">');
//		document.write('<param name="maxImageSize" value="500">');
		document.write('<param name="rejectFileFilter" value="exe, bat, com, lnk, pif, vbs, asp, aspx">');
		document.write('<param name="serverType" value="ftp">');
		document.write('<param name="showThumbNailsInApplet" value="true">');
		document.write('<param name="showThumbNailsInFileDialog" value="false">');
		document.write('<param name="transferType" value="automatic">');
		document.write('</applet>');
	}
	document.write('<div style="font-family: arial; font-size: 11px"><a href="'+successURL+'">When your upload completes, please click here to continue...</a></div>');
}

function uploadFilesC(uploadDirectory, successURL, imagefilterenabled, vhost, vusername, vpassword, vkey) {
	document.write('test');
	document.write('<applet code="ZUpload" Archive="/net/zupload/ZUpload.jar" width="450" height="300" border="0">');
	document.write('<param name="host" value="'+vhost+'">');
	document.write('<param name="user" value="'+vusername+'">');
	document.write('<param name="pass" value="'+vpassword+'">');
	document.write('<param name="path" value="'+uploadDirectory+'">');
	document.write('<param name="postscript" value="'+successURL+'">');
	document.write('</applet>');
}

function uploadFilesB(uploadDirectory, successURL, imagefilterenabled, vhost, vusername, vpassword, vkey) {
	var _info = navigator.userAgent;
	var _ns = false;
	var _ns6 = false;
	var _ie = (_info.indexOf("MSIE") > 0 && _info.indexOf("Win") > 0 && _info.indexOf("Windows 3.1") < 0);
	var _ns = (navigator.appName.indexOf("Netscape") >= 0 && ((_info.indexOf("Win") > 0 && _info.indexOf("Win16") < 0 && java.lang.System.getProperty("os.version").indexOf("3.5") < 0) || (_info.indexOf("Sun") > 0) || (_info.indexOf("Linux") > 0) || (_info.indexOf("AIX") > 0) || (_info.indexOf("OS/2") > 0) || (_info.indexOf("IRIX") > 0)));
	var _ns6 = ((_ns == true) && (_info.indexOf("Mozilla/5") >= 0));
	
//	document.writeln(navigator.appName);	
	document.write('<span style="font-family: arial; font-size:10px;">PLEASE NOTE:  The features of this uploader requires Java(tm) to be installed.<br>To install, go here: <a href="http://www.java.com" target="_blank">http://www.java.com</a></span><br>');

	if (_ie == true) {
		document.write('<object classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" width="500" height="250" name="uploadApplet"  codebase="http://java.sun.com/update/1.5.0/jinstall-1_5-windows-i586.cab#Version=5,0,0,7">');
		document.write('<param name="code" value="com.javaatwork.myftpuploader.MyFTPUploader.class">');
		document.write('<param name="archive" value="/net/ZUpload/MyFTPUploader131/myftpuploader-standard-signed-v131.jar, /net/ZUpload/MyFTPUploader131/labels.jar">');
		document.write('<param name="name" value="uploadApplet">');
		document.write('<param name="type" value="application/x-java-applet;version=1.5">');
		document.write('<param name="scriptable" value="false">');

		document.write('<param name="asciiFileExtensions" value="txt, html, htm, xml">');
		document.write('<param name="automaticLogin" value="true">');
		document.write('<param name="userName" value="'+vusername+'">');
		document.write('<param name="password" value="'+vpassword+'">');
		document.write('<param name="host" value="'+vhost+'">');
		document.write('<param name="key" value="'+vkey+'">');
		document.write('<param name="uploadDirectories" value="false">');
		document.write('<param name="uploadDirectory" value="/'+uploadDirectory+'">');
		document.write('<param name="successURL" value="'+successURL+'">');
		document.write('<param name="backgroundColor" value="#ffffff">');
		document.write('<param name="deleteOnCancel" value="true">');
		document.write('<param name="nameConflict" value="overwrite">');
		if (imagefilterenabled == true) {
			document.write('<param name="fileFilter" value="Image files (*.jpg, *.jpeg, *.gif): jpg, jpeg, gif">');
		}
		document.write('<param name="iconAdd" value="http://www.javaatwork.com/images/add.gif">');
		document.write('<param name="iconRemove" value="http://www.javaatwork.com/images/remove.gif">');
		document.write('<param name="iconUpload" value="http://www.javaatwork.com/images/upload.gif">');
		document.write('<param name="maxByteSize" value="1000">');
		document.write('<param name="maxFileSize" value="10000">');
		document.write('<param name="rejectFileFilter" value="exe, bat, com, lnk, pif, vbs, asp, aspx">');
		document.write('<param name="serverType" value="ftp">');
		document.write('<param name="showThumbNailsInApplet" value="true">');
		document.write('<param name="showThumbNailsInFileDialog" value="false">');
		document.write('<param name="transferType" value="automatic">');

		document.writeln('</object>');
	} else {
		document.write('<applet name="MyFTPUploader" code="com.javaatwork.myftpuploader.MyFTPUploader.class" archive="/net/ZUpload/MyFTPUploader131/myftpuploader-standard-signed-v131.jar, /net/ZUpload/MyFTPUploader131/labels.jar" width="500"  height="250">');
		document.write('<param name="asciiFileExtensions" value="txt, html, htm, xml">');
		document.write('<param name="automaticLogin" value="true">');
		document.write('<param name="userName" value="'+vusername+'">');
		document.write('<param name="password" value="'+vpassword+'">');
		document.write('<param name="host" value="'+vhost+'">');
		document.write('<param name="key" value="'+vkey+'">');
		document.write('<param name="uploadDirectories" value="false">');
		document.write('<param name="uploadDirectory" value="/'+uploadDirectory+'">');
		document.write('<param name="successURL" value="'+successURL+'">');
		document.write('<param name="backgroundColor" value="#ffffff">');
		document.write('<param name="deleteOnCancel" value="true">');
		document.write('<param name="nameConflict" value="overwrite">');
		if (imagefilterenabled == true) {
			document.write('<param name="fileFilter" value="Image files (*.jpg, *.jpeg, *.gif): jpg, jpeg, gif">');
		}
		document.write('<param name="iconAdd" value="http://www.javaatwork.com/images/add.gif">');
		document.write('<param name="iconRemove" value="http://www.javaatwork.com/images/remove.gif">');
		document.write('<param name="iconUpload" value="http://www.javaatwork.com/images/upload.gif">');
		document.write('<param name="maxByteSize" value="1000">');
		document.write('<param name="maxFileSize" value="10000">');
//		document.write('<param name="maxImageSize" value="500">');
		document.write('<param name="rejectFileFilter" value="exe, bat, com, lnk, pif, vbs, asp, aspx">');
		document.write('<param name="serverType" value="ftp">');
		document.write('<param name="showThumbNailsInApplet" value="true">');
		document.write('<param name="showThumbNailsInFileDialog" value="false">');
		document.write('<param name="transferType" value="automatic">');
		document.write('</applet>');
	}
	document.write('<div><a href="'+successURL+'">When your upload completes, please click here to continue...</a></div>');
}

function openWindow(url,id,w,h) {
	window.open(url,id,'height='+h+',width='+w+',toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,modal=no');
}

function openWindowModal(url,id,w,h) {
	if (window.showModalDialog) {
		window.showModalDialog(url,id,"dialogWidth:"+w+"px;dialogHeight:"+h+"px");
	} else {
		window.open(url,id,'height='+h+',width='+w+',toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no ,modal=yes');
	}
}

function borderize(divid, w) {
	cur = document.getElementById(divid).innerHTML;
	tablewidth = w + 32;
	xwidth = w - 200;
	
	x = '<table cellpadding="0" cellspacing="0" width="'+tablewidth+'">';
	x = x + '<tr><td width="14" height="14"><img src="/net/external/borderize/top-l.png" width="14" height="14"></td><td background="/net/external/borderize/top.png"><img src="/net/images/spacer.gif" width="1" height="1"></td></td><td width="18" height="14"><img src="/net/external/borderize/top-r.png" width="18" height="14"></td></tr>';
	x = x + '<tr><td width="14" background="/net/external/borderize/l.png"><img src="/net/images/spacer.gif" width="1" height="1"></td>';
	x = x + '<td>'+cur+'</td>';
	x = x + '<td width="19" background="/net/external/borderize/r.png"><img src="/net/images/spacer.gif" width="1" height="1"></td></tr>';
	x = x + '<tr><td width="14" height="20"><img src="/net/external/borderize/bottom-l.png" width="14" height="20"></td><td background="/net/external/borderize/bottom.png"><img src="/net/images/spacer.gif" width="1" height="1"></td><td width="18" height="20"><img src="/net/external/borderize/bottom-r.png" width="18" height="20"></td></tr>';
	x = x + '</table>';
	
	
	
	document.getElementById(divid).innerHTML = x;
}

function playFlashMovie(url,id,w,h) {
	vars = 'movie='+url+'&bgcolor=0x051615&fgcolor=0x13ABEC&volume=&autoplay=on&autoload=on&autorewind=on&clickurl=&clicktarget=';
	displayFlash('/net/external/index/flashvideo/player.swf','thismovie',400,300,vars,'');
}

function boxify(divid,boxtitle, styleid, tw, th, bgcolor) {
	style = 2;
	if (tw == undefined) {
		w = '100%';
	} else {
		w = tw + 23;
	}
	
	if (bgcolor == undefined) {
		bg = '#FFFFFF';
	} else {
		bg = bgcolor;
	}
	
	if (document.getElementById(divid)) {
		curW = document.getElementById(divid).offsetWidth - 26;
		cur = document.getElementById(divid).innerHTML;
		curDiv = document.getElementById(divid);
		
		if (th == undefined) {
			h = ''; 
		} else {
			h = th;
		}
		
		if (style == 2) {
			if (tw == undefined) {
				tw = '';
			}
			x = getBoxifySource(divid,curW,th);
		}
		
		newDiv = document.createElement("div");
		newDiv.innerHTML = x;
		
		parentDiv = curDiv.parentNode;
		parentDiv.insertBefore(newDiv,curDiv);

		holderDiv = document.getElementById(divid+'holder');
		holderDiv.appendChild(curDiv);
		
		if (document.getElementById(divid+'title')) {
			document.getElementById(divid+'title').innerHTML = boxtitle;
		}
	}
}

function getBoxifySource(divid,w,h) {
	x = '<table width="'+w+'" height="'+h+'" cellpadding="0" cellspacing="0">';
	x += '		<tr>';
	x += '			<td width="13" height="34"><img src="/net/images/boxify3/tl.png" width="13" height="34"></td>';
	x += '			<td background="/net/images/boxify3/t.png">';
	x += '				<div id="'+divid+'title" style="float: left; padding-left: 6px; padding-top: 4px; font-family: Arial; font-size: 12px; color: #494949; font-weight: bold; width: 100%"></div>';
	x += '				<div style="float: right; font-size: 18px; color: #494949"></div>';
	x += '			</td>';
	x += '			<td width="13" height="34"><img src="/net/images/boxify3/tr.png" width="13" height="34"></td>';
	x += '		</tr>';
	x += '		<tr>';
	x += '			<td width="13" background="/net/images/boxify3/l.png"><img src="/net/images/spacer.gif" width="1" height="1"></td>';
	x += '			<td id="'+divid+'holder" style="padding-left: 5px; padding-top: 10px; padding-bottom: 10px; background-color: #FFFFFF"></td>';
	x += '			<td width="13" background="/net/images/boxify3/r.png"><img src="/net/images/spacer.gif" width="1" height="1"></td>';
	x += '		</tr>';
	x += '		<tr>';
	x += '			<td width="13" height="21"><img src="/net/images/boxify3/bl.png" width="13" height="21"></td>';
	x += '			<td background="/net/images/boxify3/b.png"><img src="/net/images/spacer.gif" width="1" height="1"></td>';
	x += '			<td width="13" height="21"><img src="/net/images/boxify3/br.png" width="13" height="21"></td>';
	x += '		</tr>';
	x += '</table>';
	
	return x;
}

function frameify(divid) {
	cur = document.getElementById(divid).innerHTML;
	x = '<table width="100%" height="100%" cellpadding="0" cellspacing="0">';
	x = x + '<tr>';
	x = x + '	<td width="10" height="9"><img src="/net/images/frameify/tl.png" width="10" height="9"></td>';
	x = x + '	<td width="23" height="9"><img src="/net/images/frameify/topL.png" width="23" height="9"></td>';
	x = x + '	<td height="9" background="/net/images/frameify/t.png"><img src="/net/images/spacer.gif" width="1" height="1"></td>';
	x = x + '	<td width="25" height="9"><img src="/net/images/frameify/topR.png" width="25" height="9"></td>';
	x = x + '	<td width="14" height="9"><img src="/net/images/frameify/tr.png" width="14" height="9"></td>';
	x = x + '</tr>';
	x = x + '<tr>';
	x = x + '	<td width="10">';
	x = x + '		<table width="100%" height="100%" cellpadding="0" cellspacing="0">';
	x = x + '			<tr>';
	x = x + '				<td width="10" height="23"><img src="/net/images/frameify/leftT.png" width="10" height="23"></td>';
	x = x + '			</tr>';
	x = x + '			<tr>';
	x = x + '				<td width="10" background="/net/images/frameify/L.png"><img src="/net/images/spacer.gif" width="1" height="1"></td>';
	x = x + '			</tr>';
	x = x + '			<tr>';
	x = x + '				<td width="10" height="23"><img src="/net/images/frameify/leftB.png" width="10" height="23"></td>';
	x = x + '			</tr>';
	x = x + '		</table>';
	x = x + '	</td>';
	x = x + '	<td colspan="3">'+cur+'</td>';
	x = x + '	<td width="14">';
	x = x + '		<table width="100%" height="100%" cellpadding="0" cellspacing="0">';
	x = x + '			<tr>';
	x = x + '				<td width="14" height="23"><img src="/net/images/frameify/rightT.png" width="14" height="23"></td>';
	x = x + '			</tr>';
	x = x + '			<tr>';
	x = x + '				<td width="14" background="/net/images/frameify/R.png"><img src="/net/images/spacer.gif" width="1" height="1"></td>';
	x = x + '			</tr>';
	x = x + '			<tr>';
	x = x + '				<td width="14" height="23"><img src="/net/images/frameify/rightB.png" width="14" height="23"></td>';
	x = x + '			</tr>';
	x = x + '		</table>';
	x = x + '	</td>';
	x = x + '</tr>';
	x = x + '<tr>';
	x = x + '	<td width="10" height="15"><img src="/net/images/frameify/bl.png" width="10" height="15"></td>';
	x = x + '	<td width="23" height="15"><img src="/net/images/frameify/botL.png" width="23" height="15"></td>';
	x = x + '	<td height="9" background="/net/images/frameify/b.png"><img src="/net/images/spacer.gif" width="1" height="1"></td>';
	x = x + '	<td width="25" height="15"><img src="/net/images/frameify/botR.png" width="25" height="15"></td>';
	x = x + '	<td width="14" height="15"><img src="/net/images/frameify/br.png" width="14" height="15"></td>';
	x = x + '</tr>';
	x = x + '</table>';

	document.getElementById(divid).innerHTML = x;

}


/* Start swfobject.js */

/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;
/* End swfobject.js */


function playFLV (file,id,icon,w,h,skin,autostart) {
	if (skin == "undefined") {
		useskin = 'overlay.swf';
	} else {
		useskin = skin+'.swf';
	}
	
	if (document.getElementById(id)) {
		//do nothing
	} else {
		document.write('<div id="'+id+'"></div>');
	}
	
	fvars = 'file='+file+'&image='+icon+'&skin=/net/MediaPlayer/'+useskin;
	if (autostart) {
		fvars = fvars + '&autostart=true';
	}
	
	var s1 = new SWFObject('/net/MediaPlayer/player.swf','flv'+id,w,h,'9','#FFFFFF');
	s1.addParam('allowfullscreen','true');
	s1.addParam('allowscriptaccess','always');
	s1.addParam('flashvars',fvars);
	s1.write(id);
}

function playFLVPlayList (file,id,icon,w,h,skin) {
	if (skin == "undefined") {
		useskin = 'overlay.swf';
	} else {
		useskin = skin+'.swf';
	}

	document.write('<div id="video'+id+'"></div>');
	var s1 = new SWFObject('/net/MediaPlayer/player.swf','flv'+id,w,h,'9','#FFFFFF');
	s1.addParam('allowfullscreen','true');
	s1.addParam('allowscriptaccess','always');
	s1.addParam('flashvars','file='+file+'&playlist=bottom&frontcolor=cccccc&lightcolor=66cc00&skin=/net/MediaPlayer/'+useskin+'&backcolor=111111&playlistsize=200');


	s1.write('video'+id);
}

function displayFlashAdvanced (file,id,w,h,vars,ver,transp) {
	document.write('<div id="div'+id+'"></div>');
	var s1 = new SWFObject(file,id,w,h,ver,'#333333');
	s1.addParam('allowscriptaccess','always');
	s1.addParam('flashvars',vars);
	s1.addParam('quality','best');
	if (transp == true) {
		s1.addParam('wmode','transparent');
	}
	s1.addParam('scale','noscale');
	s1.addParam('salign','1');
	s1.write('div'+id);

}

function replaceDivWithFlash (file,id,w,h,vars,ver,transp,divid) {
	var s1 = new SWFObject(file,id,w,h,ver,'#FFFFFF');
	s1.addParam('allowscriptaccess','always');
	s1.addParam('flashvars',vars);
	s1.addParam('quality','best');
	if (transp == true) {
		s1.addParam('wmode','transparent');
	}
	s1.addParam('scale','noscale');
	s1.addParam('salign','1');
	s1.write(divid);

}
function getBrowserWH(wh) {
	var myWidth = 0, myHeight = 0;
	if( typeof( window.innerWidth ) == 'number' ) {
    	//Non-IE
    	myWidth = window.innerWidth;
    	myHeight = window.innerHeight;
    	b = 'mozilla';
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    	//IE 6+ in 'standards compliant mode'
    	myWidth = document.documentElement.clientWidth;
    	myHeight = document.documentElement.clientHeight;
    	b = 'IE6';
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    	//IE 4 compatible
    	myWidth = document.body.clientWidth;
    	myHeight = document.body.clientHeight;
    	b = 'IE4';
	}
	
	if (wh == 'w') {
		return myWidth;
	} else if (wh == 'h') {
		return myHeight;
	}
}

function getBrowser(fB) {
	var browser = navigator.appName;
	var b_version = navigator.appVersion;
	var version = parseFloat(b_version);
	
	if (browser == "Microsoft Internet Explorer") {
		browserCode = "IE";
	} else if (browser == "Netscape") {
		browserCode = "NETSCAPE"
	}
	
	if (fB == 'name') {
		return browser;
	} else if (fB == 'version') {
		return version;
	} else if (fB == 'code') {
		return browserCode;
	}
}

function centerWindow(w,h,xy) {
	browserW = getBrowserWH('w');
	browserH = getBrowserWH('h');
	
	x = Math.round((browserW - w) / 2);
	y = Math.round((browserH - h) / 2);
	
	if (xy == 'x') {
		return x;
	} else {
		return y;
	}
	
}
/*
function itemBoxize(divs) {
	imgfolder = '/net/images/itembox';
	spacer = '<img src="/net/images/spacer.gif" width="1" height="1">';
	divarray = divs.split(',');
	
	for (i=0; i<divarray.length; i++) {
		divid = divarray[i];
		thisBox = getBoxifySource(divid,500,300)
//		alert(divid);
		
		if (document.getElementById(divid)) {
			
			name = document.getElementById(divid+'_name').innerHTML;
			link = document.getElementById(divid+'_link').innerHTML;
			if (document.getElementById(divid+'_linktarget')) {
				linktarget = document.getElementById(divid+'_linktarget').innerHTML;
			} else {
				linktarget = '';
			}
			imgurl = document.getElementById(divid+'_imgurl').innerHTML;
			imgw = document.getElementById(divid+'_imgw').innerHTML;
			imgh = document.getElementById(divid+'_imgh').innerHTML;
			desc = document.getElementById(divid+'_desc').innerHTML;
	
			x = '';
			x = x + '<table width="100%" cellpadding="0" cellspacing="0">';
			x = x + '	<tr>';
			x = x + '		<td width="11" height="17"><img src="'+imgfolder+'/product-topL.jpg" width="11" height="17"></td>';
			x = x + '		<td height="17" background="'+imgfolder+'/product-top.jpg">'+spacer+'</td>';
			x = x + '		<td width="12" height="17"><img src="'+imgfolder+'/product-topR.jpg" width="12" height="17"></td>';
			x = x + '	</tr>';
			x = x + '	<tr>';
			x = x + '		<td width="11" background="'+imgfolder+'/product-L.jpg">'+spacer+'</td>';
			x = x + '		<td><div class="browserTitle" style="font-family: Arial; font-size:20px; color:#ffffff; position: relative; top: -6px; width:100%; height:30px; background-image: url('+imgfolder+'/product-titlebgnotext.jpg); background-repeat: repeat-x;"><img src="/net/images/spacer.gif" width="12" height="1"><a href="'+link+'" target="'+linktarget+'">'+name+'</a></div></td>';
			x = x + '		<td width="12" background="'+imgfolder+'/product-R.jpg">'+spacer+'</td>';
			x = x + '	</tr>';
			x = x + '	<tr>';
			x = x + '		<td width="11" background="'+imgfolder+'/product-L.jpg">'+spacer+'</td>';
			x = x + '		<td height="16">'+spacer+'</td>';
			x = x + '		<td width="12" background="'+imgfolder+'/product-R.jpg">'+spacer+'</td>';
			x = x + '	</tr>';
			x = x + '	<tr>';
			x = x + '		<td width="11" background="'+imgfolder+'/product-L.jpg">'+spacer+'</td>';
			x = x + '		<td>';
			x = x + '			<table width="100%" height="150" cellpadding="0" cellspacing="0">';
			x = x + '				<tr>';
			x = x + '					<td width="10">'+spacer+'</td>';
			if (imgurl != '') {
				x = x + '					<td width="90" valign="top"><a href="'+link+'" target="'+linktarget+'"><img src="'+imgurl+'" ';
				if (imgw != '' && imgh != '') {
					x = x + ' width="'+imgw+'" height="'+imgh+'"';
				}
				x = x + ' border="0"></a></td>';
				x = x + '					<td width="20">'+spacer+'</td>';
			}
			x = x + '					<td valign="top">';
			x = x + '						'+desc;
			x = x + '					</td><td width="10">'+spacer+'</td>';
			x = x + '				</tr>';
			x = x + '			</table>';
			x = x + '		</td>';
			x = x + '		<td width="12" background="'+imgfolder+'/product-R.jpg">'+spacer+'</td>';
			x = x + '	</tr>';
			x = x + '	<tr>';
			x = x + '		<td width="11" height="17"><img src="'+imgfolder+'/product-botL.jpg" width="11" height="17"></td>';
			x = x + '		<td height="17" background="'+imgfolder+'/product-bot.jpg">'+spacer+'</td>';
			x = x + '		<td width="12" height="17"><img src="'+imgfolder+'/product-botR.jpg" width="12" height="17"></td>';
			x = x + '	</tr>';
			x = x + '</table>';
			
			document.getElementById(divid).innerHTML = x;
			document.getElementById(divid).style.visibility = 'visible';
		}
	}

}
*/

function itemBoxize(divs) {
	spacer = '<img src="/net/images/spacer.gif" width="1" height="1">';
	divarray = divs.split(',');
	
	for (i=0; i<divarray.length; i++) {
		divid = divarray[i];
		thisBoxSource = getBoxifySource(divid,500,100)
		
		if (document.getElementById(divid)) {
			
			name = document.getElementById(divid+'_name').innerHTML;
			link = document.getElementById(divid+'_link').innerHTML;
			if (document.getElementById(divid+'_linktarget')) {
				linktarget = document.getElementById(divid+'_linktarget').innerHTML;
			} else {
				linktarget = '';
			}
			imgurl = document.getElementById(divid+'_imgurl').innerHTML;
			imgw = document.getElementById(divid+'_imgw').innerHTML;
			imgh = document.getElementById(divid+'_imgh').innerHTML;
			desc = document.getElementById(divid+'_desc').innerHTML;

			x = '';
			x = x + '			<table width="100%" height="150" cellpadding="0" cellspacing="0">';
			x = x + '				<tr>';
			x = x + '					<td width="10">'+spacer+'</td>';
			if (imgurl != '') {
				x = x + '					<td width="90" valign="top"><a href="'+link+'" target="'+linktarget+'"><img src="'+imgurl+'" ';
				if (imgw != '' && imgh != '') {
					x = x + ' width="'+imgw+'" height="'+imgh+'"';
				}
				x = x + ' border="0"></a></td>';
				x = x + '					<td width="20">'+spacer+'</td>';
			}
			x = x + '					<td valign="top">';
			x = x + '						'+desc;
			x = x + '					</td><td width="10">'+spacer+'</td>';
			x = x + '				</tr>';
			x = x + '			</table>';

			document.getElementById(divid).innerHTML = thisBoxSource;
			document.getElementById(divid+'title').innerHTML = '<a href="'+link+'" target="'+linktarget+'" style="text-decoration: none">'+name+'</a>';
			document.getElementById(divid+'holder').innerHTML = x;
			
			document.getElementById(divid).style.visibility = 'visible';
			document.getElementById(divid).style.display = 'block';
		}
	}
}


function request(ji) {
	hu = window.location.search.substring(1);
	gy = hu.split("&");
	fResult = 1;
	
	for (i=0;i<gy.length;i++) {
		ft = gy[i].split("=");
		if (ft[0] == ji) {
			fResult = ft[1];
		}
	}
	
	return fResult;
}

function autoVideoInsert(videoid,flvurl,iconurl,skin) {
	if (videoid > 0) {
		imgtags = document.getElementsByTagName('img');
		
		for (it=0; it<imgtags.length; it++) {
			thissrc = imgtags[it].src;
			thissrc = thissrc.toLowerCase();
			if (thissrc.indexOf('videoplaceholder.jpg') > 0) {
				divid = imgtags[it].parentNode.id;
				playFLV (flvurl,divid,iconurl,400,300,skin);
			}
		}
		
		
	}
}

function getStates(country) {
	if (country == 'ca') {
		gp = 'AB:Alberta,BC:British Columbia,MB:Manitoba,NB:New Brunswick,NL:Newfoundland and Labrador,NT:Northwest Territories,NS:Nova Scotia,NU:Nunavut,ON:Ontario,PE:Prince Edward Island,QC:Quebec,SK:Saskatchewan,YT:Yukon';
	} else if (country == 'us') {
		gp = 'AL:ALABAMA,AK:ALASKA,AS:AMERICAN SAMOA,AZ:ARIZONA,AR:ARKANSAS,CA:CALIFORNIA,CO:COLORADO,CT:CONNECTICUT,DE:DELAWARE,DC:DISTRICT OF COLUMBIA,FM:FEDERATED STATES OF MICRONESIA,FL:FLORIDA,GA:GEORGIA,GU:GUAM,HI:HAWAII,ID:IDAHO,IL:ILLINOIS,IN:INDIANA,IA:IOWA,KS:KANSAS,KY:KENTUCKY,LA:LOUISIANA,ME:MAINE,MH:MARSHALL ISLANDS,MD:MARYLAND,MA:MASSACHUSETTS,MI:MICHIGAN,MN:MINNESOTA,MS:MISSISSIPPI,MO:MISSOURI,MT:MONTANA,NE:NEBRASKA,NV:NEVADA,NH:NEW HAMPSHIRE,NJ:NEW JERSEY,NM:NEW MEXICO,NY:NEW YORK,NC:NORTH CAROLINA,ND:NORTH DAKOTA,MP:NORTHERN MARIANA ISLANDS,OH:OHIO,OK:OKLAHOMA,OR:OREGON,PW:PALAU,PA:PENNSYLVANIA,PR:PUERTO RICO,RI:RHODE ISLAND,SC:SOUTH CAROLINA,SD:SOUTH DAKOTA,TN:TENNESSEE,TX:TEXAS,UT:UTAH,VT:VERMONT,VI:VIRGIN ISLANDS,VA:VIRGINIA,WA:WASHINGTON,WV:WEST VIRGINIA,WI:WISCONSIN,WY:WYOMING';
	}
	
	return gp;
}

function getPosition(obj) {
	var curleft = curtop = 0;
	
	if (obj.offsetParent) {
		curleft = obj.offsetLeft;
		curtop = obj.offsetTop;
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		}
	}
	xy = curleft + ',' + curtop;
	xyarr = xy.split(',');
	xyarr[0] = parseInt(xyarr[0]);
	xyarr[1] = parseInt(xyarr[1]);
	
	return xyarr;
}

function fieldLimiter(obj,limit,statusObj) {
	thisStr = obj.value;
	thisLen = thisStr.length;
	
	if (statusObj != undefined && statusObj != '') {
		statusObj.innerHTML = '(' + thisLen + '/'+limit+' chars)';
	}
	
	if (thisLen > limit) {
		thisStr = thisStr.slice(0,limit);
		obj.value = thisStr;
	}
}

function animObj(fObjName,fAction) {
	thisobj = document.getElementById(fObjName);
	if (fAction == 'open') {
		openObj(fObjName);
	} else if (fAction == 'close') {
		closeObj(fObjName);
	} else if (fAction == 'fadein') {
		fadeInObj(fObjName);
	} else if (fAction == 'fadeout') {
		fadeOutObj(fObjName);
	}
}

function openObj(fObjName) {
	thisobj = document.getElementById(fObjName);
	target = thisobj.scrollHeight;
	cur = thisobj.offsetHeight;
	
	dif = Math.round((target - cur) / 4);
	if (dif < 1) {
		thisobj.style.height = target+'px';;
		getBrowser();
	} else {
		newH = cur + dif;
		thisobj.style.height = newH +'px';
		setTimeout("openObj('"+fObjName+"')",10);
	}
	
}

function closeObj(fObjName) {
	thisobj = document.getElementById(fObjName);
	target = 1;
	cur = thisobj.offsetHeight;

	dif = Math.round((cur - target) / 4);
	if (dif < 1) {
		thisobj.style.height = target+'px';;
	} else {
		newH = cur - dif;
		thisobj.style.height = newH +'px';
		setTimeout("closeObj('"+fObjName+"')",10);
	}
}

function fadeInObj(fObjName) {
	thisobj = document.getElementById(fObjName);
	target = 10;
	
	if (getBrowser('code') == "IE") {
	} else if (getBrowser('code') == "NETSCAPE") {
		cur = thisobj.style.opacity * 10;
		dif = target - cur;
		inc = target / 100;
		if (dif > 0) {
			newO = cur + inc;
			thisobj.style.opacity = (newO / 10);
			setTimeout("fadeInObj('"+fObjName+"')",10);
		}
	}
}

function fadeOutObj(fObjName) {
	thisobj = document.getElementById(fObjName);
	target = 0;
	
	if (getBrowser('code') == "IE") {
	} else if (getBrowser('code') == "NETSCAPE") {
		cur = thisobj.style.opacity * 10;
		dif = cur - target;
		inc = 10 / 100;
		if (dif > 0) {
			newO = cur - inc;
			thisobj.style.opacity = (newO / 10);
			setTimeout("fadeOutObj('"+fObjName+"')",10);
		}
	}
}

function validateEmailAddress(str) {
	var at="@"
	var dot="."
	var lat=str.indexOf(at)
	var lstr=str.length
	var ldot=str.indexOf(dot)
	if (str.indexOf(at)==-1){
	   return false
	}

	if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
	   return false
	}

	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
	    return false
	}

	 if (str.indexOf(at,(lat+1))!=-1){
	    return false
	 }

	 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
	    return false
	 }

	 if (str.indexOf(dot,(lat+2))==-1){
	    return false
	 }
	
	 if (str.indexOf(" ")!=-1){
	    return false
	 }

	 return true					
}


function swapImg(thisObj, fAction, fOnCode, fSrc, fExt) {
	if (fAction == 'on') {
		thisSrc = fSrc + fOnCode + '.' + fExt;
	} else {
		thisSrc = fSrc + '.' + fExt;
	}
	
	thisObj.src = thisSrc;
}

function setCursor(obj,fStatus) {
	if (fStatus == 'on') {
		obj.style.cursor = 'pointer';
	} else if (fStatus == 'off') {
		obj.style.cursor = 'default';
	}
}