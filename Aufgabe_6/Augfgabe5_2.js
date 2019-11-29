//Texte//
var Europe = "Die Emission von Europa in 2018 ist: ";
var Asia = "Die Emission von Asien in 2018 ist: ";
var Africa = "Die Emission von Afrika in 2018 ist: ";
var SAmerica = "Die Emission von Süd-Amerika in 2018 ist: ";
var Australia = "Die Emission von Australien in 2018 ist: ";
var NAmerica = "Die Emission von Nord-Amerika in 2018 ist: ";
var Co2 = " kg CO2";
var point = " .";
var change = " verändert";
var percent = " %";
var text = "Das sind ";
var relativeEu = "Relativ zur Gesamtemission der Welt verursacht Europa damit ";
var relativeAs = "Relativ zur Gesamtemission der Welt verursacht Asien damit ";
var relativeAf = "Relativ zur Gesamtemission der Welt verursacht Afrika damit ";
var relativeSA = "Relativ zur Gesamtemission der Welt verursacht Süd-Amerika damit ";
var relativeAu = "Relativ zur Gesamtemission der Welt verursacht Australien damit ";
var relativeNA = "Relativ zur Gesamtemission der Welt verursacht Nord-Amerika damit ";
var changeEu = "Im Vergleich von 2008 zu 2018 hat sich in Europa die Emission um ";
var changeAs = "Im Vergleich von 2008 zu 2018 hat sich in Asien die Emission um ";
var changeAf = "Im Vergleich von 2008 zu 2018 hat sich in Afrika die Emission um ";
var changeSA = "Im Vergleich von 2008 zu 2018 hat sich in Süd-Amerika die Emission um ";
var changeAu = "Im Vergleich von 2008 zu 2018 hat sich in Australien die Emission um ";
var changeNA = "Im Vergleich von 2008 zu 2018 hat sich in Nord-Amerika die Emission um ";
//Emissionen 2018//
var emissionEurope = 4209.3;
var emissionAfrica = 1235.5;
var emissionSouthAmerica = 1261.5;
var emissionAsia = 16274.1;
var emissionNorthAmerica = 6035.6;
var emissionAustralia = 2100.5;
var totalEmission = emissionEurope + emissionAfrica + emissionSouthAmerica + emissionAsia + emissionNorthAmerica + emissionAustralia;
//Emissionen Europa//
var emissionEurope2008 = 4965.7;
var emissionRelativeEu = emissionEurope * 100 / totalEmission;
var comparisonpercentEu = (emissionEurope2008 - emissionEurope) / emissionEurope2008 * 100;
var comparisonabsoluteEu = emissionEurope - emissionEurope2008;
//Emissionen Asien//
var emissionAsia2008 = 12954.7;
var emissionrelativeAs = emissionAsia * 100 / totalEmission;
var comparisonpercentAs = (emissionAsia2008 - emissionAsia) / emissionAsia2008 * 100;
var comparisonabsoluteAs = emissionAsia - emissionAsia2008;
//Emissionen Afrika//
var emissionAfrica2008 = 1028;
var emissionrelativeAf = emissionAfrica * 100 / totalEmission;
var comparisonpercentAf = (emissionAfrica2008 - emissionAfrica) / emissionAfrica2008 * 100;
var comparisonabsoluteAf = emissionAfrica - emissionAfrica2008;
//Emissionen Australien//
var emissionAustralia2008 = 1993;
var emissionrelativeAu = emissionAustralia * 100 / totalEmission;
var comparisonpercentAu = (emissionAustralia2008 - emissionAustralia) / emissionAustralia2008 * 100;
var comparisonabsoluteAu = emissionAustralia - emissionAustralia2008;
// Emissionen Südamerika//
var emissionSAmerica2008 = 1132.6;
var emissionrelativeSA = emissionSouthAmerica * 100 / totalEmission;
var comparisonpercentSA = (emissionSAmerica2008 - emissionSouthAmerica) / emissionSAmerica2008 * 100;
var comparisonabsoluteSA = emissionSouthAmerica - emissionSAmerica2008;
//Emissionen Nordamerika//
var emissionNorthAmerica2008 = 6600.4;
var emissionrelativeNA = emissionNorthAmerica * 100 / totalEmission;
var comparisonpercentNA = (emissionNorthAmerica2008 - emissionNorthAmerica) / emissionNorthAmerica2008 * 100;
var comparisonabsoluteNA = emissionNorthAmerica - emissionNorthAmerica2008;
//Consoles//
console.log(Europe + emissionEurope + Co2 + point + relativeEu + emissionRelativeEu + percent + point + changeEu +
    comparisonpercentEu + percent + change + point + text + comparisonabsoluteEu + Co2 + point);
console.log(Asia + emissionAsia + Co2 + point + relativeAs + emissionrelativeAs + percent + point + changeAs +
    comparisonpercentAs + percent + change + point + text + comparisonabsoluteAs + Co2 + point);
console.log(Africa + emissionAfrica + Co2 + point + relativeAf + emissionrelativeAf + percent + point + changeAf +
    comparisonpercentAf + percent + change + point + text + comparisonabsoluteAf + Co2 + point);
console.log(Australia + emissionAustralia + Co2 + point + relativeAu + emissionrelativeAu + percent + point + changeAu +
    comparisonpercentAu + percent + change + point + text + comparisonabsoluteAu + Co2 + point);
console.log(SAmerica + emissionSouthAmerica + Co2 + point + relativeSA + emissionrelativeSA + percent + point + changeSA +
    comparisonpercentSA + percent + change + point + text + comparisonabsoluteSA + Co2 + point);
console.log(NAmerica + emissionNorthAmerica + Co2 + point + relativeNA + emissionrelativeNA + percent + point + changeNA +
    comparisonpercentNA + percent + change + point + text + comparisonabsoluteNA + Co2 + point);
//# sourceMappingURL=Augfgabe5_2.js.map