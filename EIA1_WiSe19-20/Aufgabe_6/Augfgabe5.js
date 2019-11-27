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
function functionAsia() {
    document.querySelector(".Title").innerHTML = "CO2 Emission in Asia";
    document.querySelector(".Emissions2018").innerHTML = "" + emissionAsia;
    document.querySelector(".EmissionRelative").innerHTML = "" + emissionrelativeAs;
    document.querySelector(".GrowthRatePercent").innerHTML = "" + comparisonpercentAs;
    document.querySelector(".GrowthRateAbsolute").innerHTML = "" + comparisonabsoluteAs;
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + emissionrelativeAs + "%");
    document.querySelector(".chartText").innerHTML = emissionrelativeAs + "%";
}
window.addEventListener('load', function () {
    document.querySelector('.asia').addEventListener('click', functionAsia);
});
function functionEurope() {
    document.querySelector(".Title").innerHTML = "CO2 Emission in Europe";
    document.querySelector(".Emissions2018").innerHTML = "" + emissionEurope;
    document.querySelector(".EmissionRelative").innerHTML = "" + emissionRelativeEu;
    document.querySelector(".GrowthRatePercent").innerHTML = "" + comparisonpercentEu;
    document.querySelector(".GrowthRateAbsolute").innerHTML = "" + comparisonabsoluteEu;
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + emissionRelativeEu + "%");
    document.querySelector(".chartText").innerHTML = emissionRelativeEu + "%";
}
window.addEventListener('load', function () {
    document.querySelector('.europe').addEventListener('click', functionEurope);
});
function functionAfrica() {
    document.querySelector(".Title").innerHTML = "CO2 Emission in Africa";
    document.querySelector(".Emissions2018").innerHTML = "" + emissionAfrica;
    document.querySelector(".EmissionRelative").innerHTML = "" + emissionrelativeAf;
    document.querySelector(".GrowthRatePercent").innerHTML = "" + comparisonpercentAf;
    document.querySelector(".GrowthRateAbsolute").innerHTML = "" + comparisonabsoluteAf;
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + emissionrelativeAf + "%");
    document.querySelector(".chartText").innerHTML = emissionrelativeAf + "%";
}
window.addEventListener('load', function () {
    document.querySelector('.africa').addEventListener('click', functionAfrica);
});
function functionAustralia() {
    document.querySelector(".Title").innerHTML = "CO2 Emission in Australia";
    document.querySelector(".Emissions2018").innerHTML = "" + emissionAustralia;
    document.querySelector(".EmissionRelative").innerHTML = "" + emissionrelativeAu;
    document.querySelector(".GrowthRatePercent").innerHTML = "" + comparisonpercentAu;
    document.querySelector(".GrowthRateAbsolute").innerHTML = "" + comparisonabsoluteAu;
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + emissionrelativeAu + "%");
    document.querySelector(".chartText").innerHTML = emissionrelativeAu + "%";
}
window.addEventListener('load', function () {
    document.querySelector('.australia').addEventListener('click', functionAustralia);
});
function functionSouthAmerica() {
    document.querySelector(".Title").innerHTML = "CO2 Emission in South America";
    document.querySelector(".Emissions2018").innerHTML = "" + emissionSouthAmerica;
    document.querySelector(".EmissionRelative").innerHTML = "" + emissionrelativeSA;
    document.querySelector(".GrowthRatePercent").innerHTML = "" + comparisonpercentSA;
    document.querySelector(".GrowthRateAbsolute").innerHTML = "" + comparisonabsoluteSA;
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + emissionrelativeSA + "%");
    document.querySelector(".chartText").innerHTML = emissionrelativeSA + "%";
}
window.addEventListener('load', function () {
    document.querySelector('.southamerica').addEventListener('click', functionSouthAmerica);
});
function functionNorthAmerica() {
    document.querySelector(".Title").innerHTML = "CO2 Emission in North America";
    document.querySelector(".Emissions2018").innerHTML = "" + emissionNorthAmerica;
    document.querySelector(".EmissionRelative").innerHTML = "" + emissionrelativeNA;
    document.querySelector(".GrowthRatePercent").innerHTML = "" + comparisonpercentNA;
    document.querySelector(".GrowthRateAbsolute").innerHTML = "" + comparisonabsoluteNA;
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + emissionrelativeNA + "%");
    document.querySelector(".chartText").innerHTML = emissionrelativeNA + "%";
}
window.addEventListener('load', function () {
    document.querySelector('.northamerica').addEventListener('click', functionNorthAmerica);
});
//# sourceMappingURL=Augfgabe5.js.map