function imgPlayer(C,B,D){C="#"+C;var A=B;$.ajax({url:A,dataType:"html",success:function(G2){var E;var G=discardstr('<html',G2);if(window.ActiveXObject){E=new ActiveXObject("Microsoft.XMLDOM");E.async=false;E.loadXML(G)}else{var H=new DOMParser();E=H.parseFromString(G,"text/xml")}if(E.childNodes.length==0){return}var F=0;$(E).find(".banner").each(function(){var I;var J;var K;I="<li><a href='"+$(this).find("a").attr("href")+"' title='"+$(this).find("img").attr("alt")+"' target='_blank'><img src='"+$(this).find("img").attr("src")+"' /></a></li>";F++;J="<li><span class='numVal'>"+F+"</span></li>";K="<a href='"+$(this).find("a").attr("href")+"' class='title' target='_blank'>"+$(this).find("img").attr("alt")+"</a>";$(C+" .img").append(I);$(C+" .num").append(J);$(C).append(K)});$(C+" .img li").hide();$(C+" .title").hide();$(C+" .num li .numVal").mouseover(function(){$(C+" .title").stop(false,true);$(C+" .num li").removeClass("over");$(this).parent().addClass("over");$(C+" .img li").fadeOut(1000).eq($(this).text()-1).fadeIn(1000);$(C+" .title").hide().eq($(this).text()-1).fadeIn("slow")});$(C+" .num li").eq(0).addClass("over");$(C+" .img li").eq(0).show("fast",D);$(C+" .title").eq(0).show("fast")}})}function showNumImg(A){if(A.substring(0,1)!="#"){A="#"+A}var B=$(A).find(".num li.over .numVal").text();if(B<1||B>$(A+" .num li").length-1){B=0}$(A+" .num li").removeClass("over").eq(B).addClass("over");$(A+" .img li").fadeOut(1000).eq(B).fadeIn(1000);$(A+" .title").hide().eq(B).fadeIn("slow")};
function discardstr(bad, o) {
	var s = o.indexOf(bad);
	if (s > 0) {
        var m = o.substring(s);
        return m;
                    }
	return o;
}
