function imgPlayer(C,B,D){C="#"+C;var A=B;jq.ajax({url:A,dataType:"html",success:function(G2){var E;var G=discardstr('<html',G2);if(window.ActiveXObject){E=new ActiveXObject("Microsoft.XMLDOM");E.async=false;E.loadXML(G)}else{var H=new DOMParser();E=H.parseFromString(G,"text/xml")}if(E.childNodes.length==0){return}var F=0;jq(E).find(".banner").each(function(){var I;var J;var K;I="<li><a href='"+jq(this).find("a").attr("href")+"' title='"+jq(this).find("img").attr("alt")+"' target='_blank'><img src='"+jq(this).find("img").attr("src")+"' /></a></li>";F++;J="<li><span class='numVal'>"+F+"</span></li>";K="<a href='"+jq(this).find("a").attr("href")+"' class='title' target='_blank'>"+jq(this).find("img").attr("alt")+"</a>";jq(C+" .img").append(I);jq(C+" .num").append(J);jq(C).append(K)});jq(C+" .img li").hide();jq(C+" .title").hide();jq(C+" .num li .numVal").mouseover(function(){jq(C+" .title").stop(false,true);jq(C+" .num li").removeClass("over");jq(this).parent().addClass("over");jq(C+" .img li").fadeOut(1000).eq(jq(this).text()-1).fadeIn(1000);jq(C+" .title").hide().eq(jq(this).text()-1).fadeIn("slow")});jq(C+" .num li").eq(0).addClass("over");jq(C+" .img li").eq(0).show("fast",D);jq(C+" .title").eq(0).show("fast")}})}function showNumImg(A){if(A.substring(0,1)!="#"){A="#"+A}var B=jq(A).find(".num li.over .numVal").text();if(B<1||B>jq(A+" .num li").length-1){B=0}jq(A+" .num li").removeClass("over").eq(B).addClass("over");jq(A+" .img li").fadeOut(1000).eq(B).fadeIn(1000);jq(A+" .title").hide().eq(B).fadeIn("slow")};
function discardstr(bad, o) {
	var s = o.indexOf(bad);
	if (s > 0) {
        var m = o.substring(s);
        return m;
                    }
	return o;
}
