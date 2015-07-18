function writeLogo(){
    document.write("<div class=\"col-xs-0 logoimg\">");
    document.write("<img src=\"images/logo.png\" width=\"60\" height=\"55\"></img>");
    document.write("</div>");
    document.write("<div class=\"col-xs-2 logo\">");
    document.write("<h1><a href=\"index.html\"><span>Chance </span>全  流  通</a></h1>");
    document.write("</div>");
}

function writeNavHealth(active){
    if(active == true){
        document.write("<li class=\"active grid\"><a class=\"color1\" href=\"index.html\">保健</a>");
    }else{
        document.write("<li class=\"grid\"><a class=\"color1\" href=\"index.html\">保健</a>");
    }
    
    document.write("<div class=\"megapanel\">");
    document.write("<div class=\"row\">");
    document.write("<div class=\"col1\">");
    document.write("<div class=\"h_nav\">");
    document.write("<ul>");
    document.write("<li><a href=\"men.html?cat=honey\">蜂蜜/Honey</a></li>");
    document.write("<li><a href=\"men.html?cat=fishoil\">鱼油/Fish Oil</a></li>");
    document.write("</ul>");
    document.write("</div>");
    document.write("</div>");
    document.write("<div class=\"col1\">");
    document.write("<div class=\"h_nav\">");
    document.write("<ul>");
    document.write("<li><a href=\"men.html?cat=seeweed\">螺旋藻/Seeweed</a></li>");
    document.write("<li><a href=\"men.html?cat=health_others\">Others/其他</a></li>");
    document.write("</ul>");
    document.write("</div>");
    document.write("</div>");
    document.write("<div class=\"col1\">");
    document.write("<div class=\"h_nav\">");
    document.write("<h4>畅销产品</h4>");
    document.write("</div>");
    document.write("</div>");
    document.write("</div>");
    document.write("</div>");
    document.write("</li>");
}

function writeNavMaternal(active){
    if(active == true){
         document.write("<li class=\"active grid\"><a class=\"color1\" href=\"index.html\">母婴</a>");
    }else{
         document.write("<li class=\"grid\"><a class=\"color1\" href=\"index.html\">母婴</a>");
    }
   
    document.write("<div class=\"megapanel\">");
    document.write("<div class=\"row\">");
    document.write("<div class=\"col1\">");
    document.write("<div class=\"h_nav\">");
    document.write("<ul>");
    document.write("<li><a href=\"men.html?kao_diper\">花王尿布/Diper</a></li>");
    document.write("<li><a href=\"men.html?goon_diper\">大王尿布/Diper</a></li>");
    document.write("</ul>");
    document.write("</div>");
    document.write("</div>");
    document.write("<div class=\"col1\">");
    document.write("<div class=\"h_nav\">");
    document.write("<ul>");
    document.write("<li><a href=\"men.html?british_formula\">英国奶粉/Formula</a></li>");
    document.write("<li><a href=\"men.html?Australia_formula\">澳洲奶粉/Formula</a></li>");
    document.write("</ul>");
    document.write("</div>");
    document.write("</div>");
    document.write("<div class=\"col1\">");
    document.write("<div class=\"h_nav\">");
    document.write("<h4>畅销产品</h4>");
    document.write("</div>");
    document.write("</div>");
    document.write("</div>");
    document.write("</div>");
    document.write("</li>");
}

function writeNavElectornics(active){
    if(active == true){
        document.write("<li class=\"active grid\"><a class=\"color1\" href=\"index.html\">电子</a>");
    }else{
        document.write("<li class=\"grid\"><a class=\"color1\" href=\"index.html\">电子</a>");
    }
    document.write("<div class=\"megapanel\">");
    document.write("<div class=\"row\">");
    document.write("<div class=\"col1\">");
    document.write("<div class=\"h_nav\">");
    document.write("<ul>");
    document.write("<li><a href=\"men.html?cat=ipad_air\">Ipad Air</a></li>");
    document.write("<li><a href=\"men.html?cat=iphone6\">Iphone 6/6 Plus</a></li>");
    document.write("<li><a href=\"men.html?cat=iphone5\">Iphone 5/5s</a></li>");
    document.write("<li><a href=\"men.html?cat=apple_watch\">Apple Watch</a></li>");
    document.write("</ul>");
    document.write("</div>");
    document.write("</div>");
    document.write("<div class=\"col1\">");
    document.write("<div class=\"h_nav\">");
    document.write("<ul>");
    document.write("<li><a href=\"men.html?cat=kindle\"Kindle</a></li>");
    document.write("<li><a href=\"men.html?cat=kindle_paperwhite\">Kindle Paper White</a></li>");
    document.write("</ul>");
    document.write("</div>");
    document.write("</div>");
    document.write("<div class=\"col1\">");
    document.write("<div class=\"h_nav\">");
    document.write("<h4>畅销产品</h4>");
    document.write("<ul>");
    document.write("<li><a href=\"men.html?cat=samsumg\"三星Galaxy/Samsung Galaxy</a></li>");
    document.write("</ul>");
    document.write("</div>");
    document.write("</div>");
    document.write("</div>");
    document.write("</div>");
    document.write("</li>");
}

function writeNavAbout(active){
    if(active == true){
        document.write("<li class=\"active grid\"><a class=\"color4\" href=\"about.html\">公司概述</a></li>");
    }else{
        document.write("<li class=\"grid\"><a class=\"color4\" href=\"about.html\">公司概述</a></li>");
    }
    
}

function writeNavContact(active){
    if(active == true){
         document.write("<li class=\"active grid\"><a class=\"color6\" href=\"contact.html\">联系我们</a></li>");
    } else{
         document.write("<li class=\"grid\"><a class=\"color6\" href=\"contact.html\">联系我们</a></li>");
    }
   
}
