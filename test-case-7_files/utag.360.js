//tealium universal tag - utag.360 ut4.0.201906131450, Copyright 2019 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
if(utag.ut.merge===undefined){u.merge=function(a,b,c,d){if(c){for(d in utag.loader.GV(b)){a[d]=b[d];}}else{for(d in utag.loader.GV(b)){if(typeof a[d]=="undefined"){a[d]=b[d];}}}};}else{u.merge=utag.ut.merge;}
u.ev={"view":1,"link":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.event_lookup={"ViewContent":{obj:"vc","map":["value","currency","content_name","content_ids","content_category"]},"Search":{obj:"search","map":["value","currency","content_category","content_ids"]},"AddToCart":{obj:"cart","map":["value","currency","content_name","content_ids"]},"AddToWishlist":{obj:"wish","map":["value","currency","content_name","content_ids"]},"InitiateCheckout":{obj:"cout","map":["value","currency","content_name","content_ids","num_items"]},"AddPaymentInfo":{obj:"payment","map":["value","currency","content_category","content_ids"]},"Purchase":{obj:"purch","map":["value","currency","content_name","content_ids","num_items"]},"Lead":{obj:"lead","map":["value","currency","content_name","content_category"]},"CompleteRegistration":{obj:"reg","map":["value","currency","content_name"]},"Conversion":{obj:"cnv","map":["value","currency"]},"PageView":{obj:"page","map":[]}};u.std_params={"value":function(g,event){if(g.value===undefined||g.value===""){if(event==="ViewContent"||event==="AddToCart"){g.value=u.data.ecom.product_unit_price;}else{g.value=u.data.ecom.order_subtotal;}}
g.value=u.val(g.value);},"currency":function(g){if(!g.currency){g.currency=u.data.ecom.order_currency;}},"content_name":function(g){if(!g.content_name){g.content_name=u.data.ecom.product_name;}
g.content_name=u.val(g.content_name);},"content_ids":function(g){if(!g.content_ids){g.content_ids=u.data.ecom.product_id;}
if(u.typeOf(g.content_ids)!=="array"){g.content_ids=g.content_ids.split(/\s*,\s*/);}},"content_category":function(g){if(!g.content_category){g.content_category=u.data.ecom.product_category;}
g.content_category=u.val(g.content_category);},"num_items":function(g){if(!g.num_items&&u.data.calc_items==="true"){g.num_items=u.calc_items(u.data.ecom.product_quantity);}}};u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.val=function(value){return u.typeOf(value)==="array"?value[0]:value;};u.remove_empty=function(a){var b,t;for(b in utag.loader.GV(a)){t=u.typeOf(a[b]);if(t==="object"){u.remove_empty(a[b]);if(u.isEmptyObject(a[b])){try{delete a[b];}catch(e){a[b]=undefined;}}}else if(!((a[b]===0||a[b]===false)?!0:(t==="array"&&a[b].length===0)?!1:!!a[b])){try{delete a[b];}catch(e){a[b]=undefined;}}}
return a;};u.calc_items=function(quan){var q,i=0;for(q=0;q<quan.length;q++){i+=parseInt(quan[q]);}
return i;};u.map={"seccion:Search results":"Search","ecommerce_actionField_step:2":"InitiateCheckout","ecommerce_actionField_step:1":"ViewContent","fbCheckinDate":"search.checkin_date,vc.checkin_date,cout.checkin_date,purch.checkin_date","fbCheckoutDate":"search.checkout_date,vc.checkout_date,cout.checkout_date,purch.checkout_date","busqCiudad":"search.city,search.region,vc.city,vc.region,cout.city,cout.region,purch.city,purch.region","search.adults":"search.num_adults","products_id":"search.content_ids,vc.content_ids,cout.content_ids,purch.content_ids","fbContentType":"search.content_type,vc.content_type,cout.content_type,purch.content_type","busqPais":"search.country,vc.country,cout.country,purch.country","fbProductPrice":"cout.value","revenue":"purch.purchase_value,purch.value","currency":"order_currency,purch.purchase_currency,purch.currency,cout.currency","search.children":"search.num_children","booking.adults":"purch.num_adults","booking.children":"purch.num_children","fbAdults":"cout.num_adults,vc.num_adults","fbChildren":"vc.num_children,cout.num_children","fbCurrency":"cout.currency","fbDestination":"vc.destination,cout.destination,purch.destination,search.destination,payment.destination,lead.destination,cnv.destination,page.destination,cart.destination","ecommerce_action:purchase":"Purchase","resId":"purch.order_id"};u.extend=[function(a,b){function getQueryString(field){var href=window.location.href;var reg=new RegExp('[?&]'+field+'=([^&#]*)','i');var string=reg.exec(href);return string?string[1]:"";}
b.fbContentType=['hotel','product'];b.fbDestination=utag_data.busqCiudad;if(utag_data.seccion.indexOf("Search results")>-1||document.title.indexOf("Room Display")>-1||document.title.indexOf("Confirmation")>-1){console.log("entra!");if(getQueryString("fini")!=""){b.fbCheckinDate=getQueryString("fini");b.fbCheckinDate=b.fbCheckinDate.split("/").reverse().join("-");b.fbCheckoutDate=getQueryString("fout");b.fbCheckoutDate=b.fbCheckoutDate.split("/").reverse().join("-");b.fbDestination=b.busqCiudad;}else if(utag_data.busqFecha&&utag_data.busqFecha!=""){if(document.title.indexOf("Room Display")>-1){b.fbCheckinDate=utag_data.busqFecha.split("-")[0].trim();b.fbCheckinDate=b.fbCheckinDate.split("/").join("-");b.fbCheckoutDate=utag_data.busqFecha.split("-")[1].trim();b.fbCheckoutDate=b.fbCheckoutDate.split("/").join("-");b.fbDestination=utag_data.busqCiudad;}else{b.fbCheckinDate=utag_data.busqFecha.split("-")[0].trim();b.fbCheckinDate=b.fbCheckinDate.split("/").reverse().join("-");b.fbCheckoutDate=utag_data.busqFecha.split("-")[1].trim();b.fbCheckoutDate=b.fbCheckoutDate.split("/").reverse().join("-");b.fbDestination=utag_data.busqCiudad;}}
if(document.location.pathname.indexOf("booking/confirmation")>-1){b.fbProductPrice=utag_data.revenue;b.fbDestination=utag_data.busqCiudad;b.fbCheckinDate=utag_data.booking.checkIn.split("/").reverse().join("-");b.fbOrder_id=utag_data.resId;b.fbCheckoutDate=utag_data.booking.checkOut.split("/").reverse().join("-");}
if($("#adu"))b.fbAdults=$("#adu").text()||"";if($("#nin"))b.fbChildren=$("#nin").text()||"";b.fbDestination=utag_data.busqCiudad;}
else if(document.location.pathname.indexOf("/step2-")>-1&&utag_data.ecommerce_actionField_step=="2"){b.fbCheckinDate=$("input[name='fini']").val()||"";b.fbCheckinDate=b.fbCheckinDate.split("/").reverse().join("-");b.fbCheckoutDate=$("input[name='fout']").val()||"";b.fbCheckoutDate=b.fbCheckoutDate.split("/").reverse().join("-");b.fbProductPrice=parseFloat(b.products_price[0]);var myString=jQuery('div.total-price .row .h3').text();var myRegexp=/[a-zA-Z]+/g;var match=myRegexp.exec(myString);b.fbCurrency=match[0];b.fbAdults=window.nadults||"";b.fbChildren=window.nchild;b.fbDestination=utag_data.busqCiudad;}
}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g,h,evt=[];u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://connect.facebook.net/en_US/fbevents.js","cust_pixel":"817242028393020,433839673490510","conv_pixel":"2.0","page_view":"false","calc_items":"true","default_event":"PageView","custom_data":{},"custom_event":"","product_id":[],"product_name":[],"product_category":[],"product_unit_price":[],"product_quantity":[],"evt_list":[],"ecom":{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){evt=evt.concat(u.map[d].split(","));}}}}
if(u.data.evt_list&&u.typeOf(u.data.evt_list)!=="array"){u.data.evt_list=u.data.evt_list.split(/\s*,\s*/);}
if(u.data.default_event!=="None"&&u.data.default_event!==""){u.data.evt_list.push(u.data.default_event);}
u.data.evt_list=u.data.evt_list.concat(evt);g=u.data.ecom;g.order_id=u.data.order_id||b._corder||"";g.order_subtotal=u.data.order_subtotal||b._csubtotal||"";g.order_currency=u.data.order_currency||b._ccurrency||"";if(u.data.product_name.length===0&&b._cprodname!==undefined){g.product_name=b._cprodname.slice(0);}else{g.product_name=u.data.product_name;}
if(u.data.product_id.length===0&&b._cprod!==undefined){g.product_id=b._cprod.slice(0);}else{g.product_id=u.data.product_id;}
if(u.data.product_category.length===0&&b._ccat!==undefined){g.product_category=b._ccat.slice(0);}else{g.product_category=u.data.product_category;}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){g.product_unit_price=b._cprice.slice(0);}else{g.product_unit_price=u.data.product_unit_price;}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){g.product_quantity=b._cquan.slice(0);}else{g.product_quantity=u.data.product_quantity;}
u.loader_cb=function(){var g={},i,j,_event,_track="track";if(u.data.evt_list.toString().indexOf("Purchase")===-1&&u.data.ecom.order_id){u.data.evt_list.push("Purchase");}
for(i=0;i<u.data.evt_list.length;i++){_event=u.data.evt_list[i];f=u.event_lookup[_event];c=f?f.map:[];f=f?f.obj:_event;g=u.data[f]=u.data[f]||{};for(j=0;j<c.length;j++){u.std_params[c[j]](g,_event);}
if(_event==="ViewContent"||_event==="AddToCart"){}else if(_event==="Lead"){if(!g.content_category){g.content_category='Quote';}}else if(_event==="Search"){if(!g.content_category){g.content_category='Product Search';}}else if(_event==="Conversion"&&u.data.conv_pixel){_event=u.data.conv_pixel;}else if(_event&&!u.event_lookup[_event]){}
if(g.value!==undefined){if(u.typeOf(g.value)==="array"){for(j=0;j<g.value.length;j++){g.value[j]=parseFloat(g.value[j])||0.00;}}else{g.value=parseFloat(g.value)||0.00;}}
if(_event){fbq(_track,_event,u.remove_empty(g));}}};u.callBack=function(){var data={};u.initialized=true;while(data=u.queue.shift()){u.data=data.data;u.loader_cb();}};if(u.initialized){u.loader_cb();}else{u.queue.push({"data":u.data});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":'utag_360'});!function(f,b,e){if(f.fbq)return;e=f.fbq=function(){e.callMethod?e.callMethod.apply(e,arguments):e.queue.push(arguments);};if(!f._fbq)f._fbq=e;e.push=e;e.loaded=!0;e.version='2.0';e.queue=[];e.agent='tmtealium';}(window,document);if(u.data.cust_pixel){u.data.cust_pixel=u.data.cust_pixel.split(/\s*,\s*/);for(var i=0;i<u.data.cust_pixel.length;i++){u.data.cust_pixel[i]=u.data.cust_pixel[i].replace(/^\s*/,"").replace(/\s*$/,"");fbq('init',u.data.cust_pixel[i]);}
if(u.data.page_view==="true"){}}}}
}};utag.o[loader].loader.LOAD(id);}("360","nh-hoteles.es-main-2014"));}catch(error){utag.DB(error);}
