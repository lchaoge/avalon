jQuery.extend({createUploadIframe:function(e,t){var r="jUploadFrame"+e;if(window.ActiveXObject){var o=1*navigator.userAgent.match(/msie (\d+\.\d+)/i)[1],a=o;if(a>=9&&a<11){var n=document.createElement("iframe");n.id=r,n.name=r}else{if(!(a<9&&a>6))throw new Error("your brower version is too lower");var n=document.createElement('<iframe id="'+r+'" name="'+r+'" />');"boolean"==typeof t?n.src="javascript:false":"string"==typeof t&&(n.src=t)}}else{var n=document.createElement("iframe");n.id=r,n.name=r}return n.style.position="absolute",n.style.top="-1000px",n.style.left="-1000px",document.body.appendChild(n),n},createUploadForm:function(e,t,r){var o="jUploadForm"+e,a="jUploadFile"+e,n=jQuery('<form  action="" method="POST" name="'+o+'" id="'+o+'" enctype="multipart/form-data"></form>'),u=jQuery("#"+t),d=jQuery(u).clone();if(jQuery(u).attr("id",a),jQuery(u).before(d),jQuery(u).appendTo(n),r)for(var i in r)$('<input type="hidden" name="'+i+'" value="'+r[i]+'" />').appendTo(n);return jQuery(n).css("position","absolute"),jQuery(n).css("top","-1200px"),jQuery(n).css("left","-1200px"),jQuery(n).appendTo("body"),n},ajaxFileUpload:function(e){e=jQuery.extend({},jQuery.ajaxSettings,e);var t=e.id,r=jQuery.createUploadForm(t,e.fileElementId,e.data),o=(jQuery.createUploadIframe(t,e.secureuri),"jUploadFrame"+t),a="jUploadForm"+t;e.global&&!jQuery.active++&&jQuery.event.trigger("ajaxStart");var n=!1,u={};e.global&&jQuery.event.trigger("ajaxSend",[u,e]);var d=function(t){var d=document.getElementById(o);try{d.contentWindow?(u.responseText=d.contentWindow.document.body?d.contentWindow.document.body.innerHTML:null,u.responseXML=d.contentWindow.document.XMLDocument?d.contentWindow.document.XMLDocument:d.contentWindow.document):d.contentDocument&&(u.responseText=d.contentDocument.document.body?d.contentDocument.document.body.innerHTML:null,u.responseXML=d.contentDocument.document.XMLDocument?d.contentDocument.document.XMLDocument:d.contentDocument.document)}catch(i){jQuery.handleError(e,u,null,i)}if(u||"timeout"==t){n=!0;var c;try{if(c="timeout"!=t?"success":"error","error"!=c){var l=jQuery.uploadHttpData(u,e.dataType);e.success&&(e.success(l,c),$("#"+o).remove(),$("#"+a).remove(),$("#"+e.fileElementId).val("")),e.global&&jQuery.event.trigger("ajaxSuccess",[u,e])}else jQuery.handleError(e,u,c)}catch(i){c="error",jQuery.handleError(e,u,c,i)}e.global&&jQuery.event.trigger("ajaxComplete",[u,e]),e.global&&!--jQuery.active&&jQuery.event.trigger("ajaxStop"),e.complete&&e.complete(u,c),jQuery(d).unbind(),setTimeout(function(){try{jQuery(d).remove(),jQuery(r).remove()}catch(t){jQuery.handleError(e,u,null,t)}},100),u=null}};e.timeout>0&&setTimeout(function(){n||d("timeout")},e.timeout);try{var r=jQuery("#"+a);jQuery(r).attr("action",e.url),jQuery(r).attr("method","POST"),jQuery(r).attr("target",o),r.encoding?r.encoding="multipart/form-data":r.enctype="multipart/form-data";var i="",c=navigator.userAgent.match(/msie (\d+\.\d+)/i);void 0==c&&null==c||(i=1*c[1]),""==i||void 0==i?jQuery(r).submit():1*i>6&&1*i<11&&(jQuery(r).submit(),jQuery(r).submit(),jQuery(r).submit())}catch(l){jQuery.handleError(e,u,null,l)}return jQuery("#"+o).load(d),{abort:function(){}}},uploadHttpData:function(r,type){var data=!type;if(data="xml"==type||data?r.responseXML:r.responseText,"script"==type&&jQuery.globalEval(data),"json"==type){data=r.responseText;var start=data.indexOf(">");if(start!=-1){var end=data.indexOf("<",start+1);end!=-1&&(data=data.substring(start+1,end))}eval("data = "+data)}return"html"==type&&jQuery("<div>").html(data).evalScripts(),data},handleError:function(e,t,r,o){e.error&&(e.error.call(e.context||e,t,r,o),$("#jUploadFrame"+e.id).remove(),$("#jUploadForm"+e.id).remove(),$("#"+e.fileElementId).val("")),e.global&&(e.context?jQuery(e.context):jQuery.event).trigger("ajaxError",[t,e,o])}});