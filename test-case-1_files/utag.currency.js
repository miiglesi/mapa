var tealiumiq_currency = {
    ts:"201907170100",
    rates:{"GNF":9175.543594,"BSD":1,"IRR":42105,"SEK":9.390388,"STD":21560.79,"RON":4.21908,"PKR":159.664531,"RSD":104.927701,"KES":103.21,"SDG":45.151683,"MWK":765.395715,"GTQ":7.685158,"ZWL":322.000001,"XPF":106.42742,"TTD":6.784762,"TND":2.872389,"JMD":135.147308,"LAK":8742.48312,"ANG":1.781511,"SZL":13.882454,"DJF":178,"AMD":476.96867,"NAD":13.884784,"CVE":98.651667,"GHS":5.355287,"INR":68.691,"KGS":69.531652,"UYU":35.113294,"CLF":0.024319,"SVC":8.759139,"BYN":2.034564,"GGP":0.805867,"KZT":383.749286,"STN":21.9,"ARS":42.684,"MNT":2651.710026,"SSP":130.26,"KYD":0.834171,"MMK":1512.295166,"TWD":31.058285,"MZN":62.06,"PYG":6003.742754,"MRO":357,"BTC":0.000105023991,"VUV":114.8305,"MVR":15.349987,"KMF":437.003003,"LSL":13.884884,"FKP":0.805867,"VES":7229.556719,"XAF":585.022976,"COP":3194.183898,"AOA":345.9285,"FJD":2.1341,"BOB":6.916866,"BIF":1840.694374,"CDF":1652.919994,"NZD":1.491202,"TZS":2298.7,"TMT":3.499986,"PGK":3.400735,"LBP":1513.70559,"CHF":0.98814,"UZS":8590.419558,"PAB":1,"SCR":13.659996,"KHR":4083.316642,"BHD":0.376955,"USD":1,"SBD":8.244491,"ZAR":13.95959,"XOF":585.022976,"IDR":13952.5,"NPR":109.795724,"BWP":10.580065,"JPY":108.2414,"VND":23225.383633,"CNY":6.876207,"BND":1.350445,"AED":3.673181,"BAM":1.744357,"LRD":200.99995,"SLL":7056.043446,"OMR":0.38501,"IQD":1194.429155,"BRL":3.76855,"ISK":126.390102,"DOP":50.824416,"ZMW":12.525997,"KWD":0.304454,"UGX":3693.628391,"MXN":19.0997,"NGN":362.11,"XPT":0.00118907,"NOK":8.57409,"CUC":1,"AFN":81.0985,"TOP":2.272561,"PHP":50.9605,"MGA":3657.192628,"CLP":682.705212,"AUD":1.424941,"MRU":36.8,"RUB":62.9977,"VEF":248487.642241,"TJS":9.439764,"BTN":68.631595,"BMD":1,"RWF":914.976167,"JEP":0.805867,"XPD":0.00065718,"GIP":0.805867,"LYD":1.396869,"YER":250.350747,"XCD":2.70255,"XAU":0.00071183,"MOP":8.060013,"GMD":49.9,"BGN":1.74519,"SRD":7.458,"HKD":7.81495,"MKD":54.665582,"MDL":17.7005,"PLN":3.79661,"KRW":1180.75,"SYP":515.025169,"SOS":579.032951,"CUP":25.75,"CNH":6.882183,"UAH":25.959714,"CZK":22.8243,"LKR":175.899049,"ILS":3.5477,"GYD":209.138798,"SGD":1.35883,"DKK":6.660053,"MYR":4.1135,"AZN":1.7025,"WST":2.640209,"DZD":119.349691,"HRK":6.593465,"EGP":16.6275,"QAR":3.640775,"CRC":576.50583,"KPW":900,"HTG":94.143938,"ETB":28.880252,"XAG":0.06427149,"THB":30.9235,"IMP":0.805867,"BDT":84.579347,"TRY":5.711506,"ERN":14.999786,"PEN":3.286197,"SAR":3.75065,"JOD":0.709001,"AWG":1.800999,"BBD":2,"HUF":290.75,"MAD":9.570919,"SHP":0.805867,"CAD":1.309095,"GBP":0.805867,"MUR":35.910002,"HNL":24.491908,"NIO":32.993003,"GEL":2.845,"EUR":0.891862,"BZD":2.01749,"XDR":0.723413,"ALL":108.840925},
    convert:function(a,f,t){
		// Convert that value to an array
		var isString = typeof a == "string",
			converted = isString ? [a] : a;

		// Iterate over the values to convert each one
		for (var i=0; i<converted.length; i++) {
			converted[i] = parseFloat(converted[i]);
			f = f.toUpperCase();
			t = t.toUpperCase();
			if (converted[i] > 0 && this.rates[f] > 0 && this.rates[t] > 0){
				var v = converted[i] / this.rates[f] * this.rates[t];
				converted[i] = v.toFixed(2);
			}
		}

		// Return the value we accepted
		if (isString) return converted[0];
		else return converted;
    }
}