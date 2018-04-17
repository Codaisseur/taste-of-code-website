$(document).ready(function() {
  var sponsors = [
    {name: "Codaisseur", link: "http://www.codaisseur.com/?utm_source=tasteofcode.nl", logo: "images/sponsors/codaisseur.png"},
    {name: "TQ", link: "http://tq.co/", logo: "images/sponsors/tq.png"},
    {name: "Nerderlands", link: "http://nerderlands.com/", logo: "images/sponsors/nerderlands-black.png"},
    {name: "INCO", link: "http://inco.co.com/", logo: "images/sponsors/inco.png"},
    {name: "Rabobank", link: "http://www.rabobank.com/", logo: "images/sponsors/rabobank_long.png"},
    {name: "NOS", link: "http://www.nos.nl/", logo: "images/sponsors/nos.png"},
    {name: "Mirabeau", link: "http://www.mirabeau.nl/", logo: "images/sponsors/mirabeau.png"},
    {name: "TomTom", link: "http://www.tomtom.com/", logo: "images/sponsors/tomtom.png"},
    {name: "KPN", link: "https://www.kpn.com/", logo: "images/sponsors/kpn.png"},
    {name: "ABN Amro", link: "https://www.abnamro.nl/", logo: "images/sponsors/abnamro.png"}
  ]

  $.each(sponsors, function(i, obj){
    $("<a>",{
      html: $("<img>", {src: obj.logo, alt: obj.name}),
      href: obj.link,
      target: "_blank",
    }).appendTo(".logos");
  });
});
