//***********base lib****
// roll table
var rollspeed = 50;
var rollspeeds = 50;
var myInter;
var myInters;

function MarqueeV() {
  var e = document.getElementById("oRollV");
  var t = document.getElementById("oRollV1");
  var n = document.getElementById("oRollV2");
  if(n.offsetTop - e.scrollTop <= 0) {
    e.scrollTop -= t.offsetHeight;
  } else {
    e.scrollTop++
  }
}

function MarqueeVs() {
  var e = document.getElementById("sRollV");
  var t = document.getElementById("sRollV1");
  var n = document.getElementById("sRollV2");
  if(n.offsetTop - e.scrollTop <= 0) {
    e.scrollTop -= t.offsetHeight;
  } else {
    e.scrollTop++
  }
}

function StartRollV() {
  var e = document.getElementById("oRollV");
  var t = document.getElementById("oRollV1");
  var n = document.getElementById("oRollV2");
  if(e) {
    if(parseInt(e.style.height, 10) >= n.offsetTop) {
      e.style.height = n.offsetTop;
      return
    }
    n.innerHTML = t.innerHTML;
    myInter = setInterval(MarqueeV, rollspeed);
    e.onmouseover = function() {
      clearInterval(myInter)
    };
    e.onmouseout = function() {
      myInter = setInterval(MarqueeV, rollspeed)
    };
  }
}

function StartRollVs() {
  var e = document.getElementById("sRollV");
  var t = document.getElementById("sRollV1");
  var n = document.getElementById("sRollV2");
  if(e) {
    if(parseInt(e.style.height, 10) >= n.offsetTop) {
      e.style.height = n.offsetTop;
      return
    }
    n.innerHTML = t.innerHTML;
    myInters = setInterval(MarqueeVs, rollspeeds);
    e.onmouseover = function() {
      clearInterval(myInters)
    };
    e.onmouseout = function() {
      myInters = setInterval(MarqueeVs, rollspeeds)
    };
  }
}
//roll text
var $ = jQuery.noConflict();
(function(e) {
  e.fn.marquee = function(t) {
    function d() {
      if(t.direction == "left") {
        var e = i.scrollLeft();
        if(t.step < 0) {
          i.scrollLeft((e <= 0 ? h : e) + t.step)
        } else {
          i.scrollLeft((e >= h ? 0 : e) + t.step)
        }
        if(e % l === 0) {
          v()
        }
      } else {
        var n = i.scrollTop();
        if(t.step < 0) {
          i.scrollTop((n <= 0 ? p : n) + t.step)
        } else {
          i.scrollTop((n >= p ? 0 : n) + t.step)
        }
        if(n % c === 0) {
          v()
        }
      }
    }
    function v() {
      if(t.pause > 0) {
        var e = t.step;
        t.step = 0;
        setTimeout(function() {
          t.step = e
        }, t.pause)
      }
    }
    t = e.extend({
      speed: parseInt(e(this).attr("data-speed"), 10),
      step: parseInt(e(this).attr("data-step"), 10),
      direction: e(this).attr("data-direction"),
      pause: parseInt(e(this).attr("data-pause"), 10)
    }, t || {});
    var n = jQuery.inArray(t.direction, ["right", "down"]);
    if(n > -1) {
      t.direction = ["left", "up"][n];
      t.step = -t.step
    }
    var r;
    var i = e(this);
    var s = i.innerWidth();
    var o = i.innerHeight();
    var u = e("ul", i);
    var a = e("li", u);
    var f = a.size();
    var l = a.width();
    var c = a.height();
    var h = l * f;
    var p = c * f;
    if(t.direction == "left" && h > s || t.direction == "up" && p > o) {
      if(t.direction == "left") {
        u.width(2 * f * l + 1 * l);
        if(t.step < 0) {
          i.scrollLeft(h)
        }
      } else {
        u.height(2 * f * c);
        if(t.step < 0) {
          i.scrollTop(p)
        }
      }
      u.append(a.clone());
      r = setInterval(d, t.speed);
      i.hover(function() {
        clearInterval(r)
      }, function() {
        r = setInterval(d, t.speed)
      })
    }
  }
})(jQuery)
function rolltext(e) {
  $(e).each(function() {
    $(this).marquee()
  })
}
//**** trigger event
$(document).ready(function() {
	//kupu tabs-start
	  kuputabs = {};
	  kuputabs.idCounter = 0;
	  kuputabs.Tab = function(title, open) {
	    this.id = null;
	    this.open = open;
	    this.title = title;
	    this.content = $('<div class="kuputab-content"><!-- Dynamically generated tab --></div>')
	  };
	  kuputabs.collectTabs = function() {
	    $("h2.kuputab-tab-definer, h2.kuputab-tab-definer-default").parent().each(function() {
	      var tabs = [];
	      var collecting = false;
	      var curTab = null;
	      var parent = this;
	      $(this).contents().each(function() {
	        var t = $(this);
	        if(t.hasClass("kuputab-tab-definer") || t.hasClass("kuputab-tab-definer-default")) {
	          var open = t.hasClass("kuputab-tab-definer-default");
	          var tab = new kuputabs.Tab(t.text(), open);
	          tabs.push(tab);
	          curTab = tab;
	          t.removeClass("kuputab-tab-definer");
	          t.removeClass("kuputab-tab-definer-default");
	          parent.removeChild(this)
	        } else {
	          if(curTab != null) {
	            parent.removeChild(this);
	            curTab.content.append(this)
	          }
	        }
	      });
	      var container = kuputabs.constructContainer(tabs);
	      $(parent).append(container)
	    })
	  };
	  kuputabs.constructContainer = function(tabs) {
	    var cont = $('<div class="kuputab-container"><!-- Dynamically generated tab  container --></div>');
	    var selectors = $('<ul class="kuputab-selectors"><!-- Dynamically generated tab selectors --></ul>');
	    var i;
	    if(tabs.length == 0) {
	      return
	    }
	    for(i = 0; i < tabs.length; i++) {
	      var tab = tabs[i];
	      var first = (i == 0);
	      var last = (i == tabs.length - 1);
	      tab.id = (kuputabs.idCounter++);
	      var classes = "kuputab-selector";
	      if(first) {
	        classes += " kuputab-selector-first"
	      }
	      if(last) {
	        classes += " kuputab-selector-last"
	      }
	      var clicker = $("<li></li>");
	      clicker.attr({
	        "class": classes,
	        "id": "kuputab-selector-" + tab.id
	      });
	      var link = $("<a></a>");
	      var classes;
	      if(tab.open) {
	        classes = "selected"
	      } else {
	        classes = ""
	      }
	      link.attr({
	        id: "kuputab-link-" + tab.id,
	        href: "#kuputab-content-" + tab.id,
	        "class": classes
	      });
	      link.append("<span>" + tab.title + "</span>");
	      link.mouseover(kuputabs.mouseover);
	      clicker.append(link);
	      selectors.append(clicker)
	    }
	    cont.append(selectors);
	    for(i = 0; i < tabs.length; i++) {
	      var tab = tabs[i];
	      var first = (i == 0);
	      var last = (i == tabs.length - 1);
	      var content = tab.content;
	      content.attr({
	        "id": "kuputab-content-" + tab.id
	      });
	      if(tab.open) {} else {
	        tab.content.addClass("hidden")
	      }
	      cont.append(content)
	    }
	    return cont
	  };
	  kuputabs.mouseover = function(e) {
	    var elem = $(e.target);
	    if(elem.get(0).tagName.toLowerCase() != "a") {
	      elem = elem.parents("a")
	    }
	    var container = elem.parents(".kuputab-container");
	    var id = elem.attr("id");
	    if(id == null) {
	      alert("Invalid tab selector handler " + e.target);
	      return
	    }
	    id = id.replace(/^kuputab-link-/, "");
	    var selectors = container.find("li.kuputab-selector a");
	    var panels = container.find("div.kuputab-content");
	    selectors.removeClass('selected');
	    panels.addClass('hidden');
	    var panel = container.find("#kuputab-content-" + id);
	    var selector = container.find("#kuputab-selector-" + id + " a");
	    selector.addClass("selected");
	    panel.removeClass("hidden");
	    return false
	  };
	  kuputabs.init = function() {
	    try {
	      if(document.designMode.toLowerCase() == "on") {
	        return
	      } else {
	        kuputabs.collectTabs();
	        $("#portletPageColumns").appendTo("#kuputab-content-0")
	      }
	    } catch(e) {
	      kuputabs._printStackTrace(e)
	    }
	  };
	  kuputabs.log = function(msg) {
	    if(typeof(console) != "undefined") {
	      if(typeof(console.log) != "undefined") {
	        console.log(msg)
	      }
	    }
	  };
	  kuputabs._printStackTrace = function(exc) {
	    function print(msg) {
	      kuputabs.log(msg)
	    }
	    print(exc);
	    if(!exc.stack) {
	      print('no stacktrace available');
	      return
	    }
	    var lines = exc.stack.toString().split('\n');
	    var toprint = [];
	    for(var i = 0; i < lines.length; i++) {
	      var line = lines[i];
	      if(line.indexOf('ecmaunit.js') > -1) {
	        break
	      }
	      if(line.charAt(0) == '(') {
	        line = 'function' + line
	      }
	      var chunks = line.split('@');
	      toprint.push(chunks)
	    }
	    toprint.reverse();
	    for(var j = 0; j < toprint.length; j++) {
	      print('  ' + toprint[j][1]);
	      print('    ' + toprint[j][0])
	    }
	    print()
	  };
	  kuputabs.click = function(e) {
	    return false
	  };
	  $(kuputabs.init);	
	//kupu tabs-end
	// trigger drop down menu
  $('.dropdown-toggle').dropdown();
  // trigger table roll
  StartRollV();
  StartRollVs();
  //drop down menu redirector
  $(".dropdown-menu").on("click", "a.state-missing-value", function() {
    var url = $(this).attr("href");
    window.location.href = url + "/@@view";
    return false
  });
  //search portlet botton click
  $("#quicksearch").on("click", ".searchButton", function() {
    var a = $("#search_input").val();
    var b2 = encodeURIComponent(a);
    var base = $("#ajax").attr('data-js-target');
    window.location.href = base + "/@@allorgnization_listings?orgname=" + b2;
    return false
  });
  // search portlet input enter event
  $("#search_input").keypress(function(event) {
    if(event.which == 13) {
      var a = $("#search_input").val();
      var b2 = encodeURIComponent(a);
      var base = $("#ajax").attr('data-js-target');
      window.location.href = base + "/@@allorgnization_listings?orgname=" + b2;
      return false
    }
  });
  // big ad redirector
  $(".big-ad").on("click", function() {
    var base = $("#ajax").attr('data-js-target');
    window.location.href = base + "/dangjiangongzuo/dangdequnzhongluxianjiaoyoshijianhuodong/@@view";
    return false
  });
});