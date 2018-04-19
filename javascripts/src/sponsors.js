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
    {name: "ABN Amro", link: "https://www.abnamro.nl/", logo: "images/sponsors/abnamro.png"},
    {name: "216", link: "https://216.nl/", logo: "images/sponsors/216.png"},
    {name: "Accenture", link: "https://www.accenture.com", logo: "images/sponsors/accenture.png"},
    {name: "Adcombi", link: "https://www.adcombi.com/", logo: "images/sponsors/adcombi.png"},
    {name: "Aliens Are Among Us", link: "http://aliensareamongus.com/", logo: "images/sponsors/aliens.png"},
    {name: "Amis Services B.V.", link: "https://www.amis.nl/", logo: "images/sponsors/amis.svg"},
    {name: "Asics", link: "http://www.asics.com/nl/nl-nl/", logo: "images/sponsors/asics.png"},
    {name: "de Bijenkorf", link: "https://www.debijenkorf.nl/", logo: "images/sponsors/de_bijenkorf.png"},
    {name: "Chimp", link: "https://www.chimp.nl/", logo: "images/sponsors/chimp.png"},
    {name: "Creative Media Network", link: "http://www.creativemedianetwork.com/", logo: "images/sponsors/cmn.png"},
    {name: "Dedact", link: "http://www.dedact.nl/nl/", logo: "images/sponsors/dedact.png"},
    {name: "Dexels", link: "http://www.dexels.com/", logo:"images/sponsors/dexels.svg"},
    {name: "DHL", link: "http://www.dhl.nl/nl.html", logo: "images/sponsors/dhl.png"},
    {name: "De Monsters", link: "https://demonsters.nl/", logo: "images/sponsors/de_monsters.png"},
    {name: "Dot Control", link: "https://dotcontrol.com/", logo: "images/sponsors/dot_control.png"},
    {name: "Eaglescience", link: "https://eaglescience.nl/", logo: "images/sponsors/eaglescience.png"},
    {name: "De Voorhoede", link: "https://www.voorhoede.nl/nl/", logo: "images/sponsors/de_voorhoede.png"},
    {name: "Epiphany", link: "https://epiphany-rbc.com/", logo: "images/sponsors/epiphany.png"},
    {name: "Exivity", link: "https://exivity.com/", logo: "images/sponsors/exivity.png"},
    {name: "Feli", link: "https://meetfeli.com/", logo: "images/sponsors/feli.png"},
    {name: "Flexas", link: "https://www.flexas.nl/", logo: "images/sponsors/flexas.png"},
    {name: "Frontmen", link: "https://frontmen.nl/", logo: "images/sponsors/frontmen.png"},
    {name: "Gillz", link: "https://www.gillz.nl/", logo: "images/sponsors/gillz.png"},
    {name: "Hoppinger", link: "https://www.hoppinger.com/", logo: "images/sponsors/hoppinger.png"},
    {name: "Immidi", link: "http://www.immidi.com/", logo: "images/sponsors/immidi.png"},
    {name: "Incentro", link: "https://www.incentro.com/nl/", logo: "images/sponsors/incentro.png"},
    {name: "Instant Magazine", link: "https://www.instantmagazine.com/", logo: "images/sponsors/instant.png"},
    {name: "Jaamo", link: "http://jaamo.nl/", logo: "images/sponsors/jaamo.png"},
    {name: "Jewel Labs", link: "http://jewellabs.nl/", logo: "images/sponsors/jewel.png"},
    {name: "Jungle Minds", link: "https://jungleminds.com/", logo: "images/sponsors/jungle.png"},
    {name: "Kabisa", link: "https://www.kabisa.nl", logo: "images/sponsors/kabisa.png"},
    {name: "KOVnet", link: "http://kdvnet.nl/", logo: "images/sponsors/kov.png"},
    {name: "Labrooms", link: "https://www.labrooms.com/", logo: "images/sponsors/labrooms.png"},
    {name: "LamaLama", link: "https://lamalama.nl", logo: "images/sponsors/lamalama.png"},
    {name: "Ligo", link: "https://www.ligo.nl/", logo: "images/sponsors/ligo.png"},
    {name: "Mangrove", link: "https://www.mangrove.com", logo: "images/sponsors/mangrove.png"},
    {name: "Mercash", link: "https://www.mercash.nl/", logo: "images/sponsors/mercash.png"},
    {name: "Mobgen", link: "https://mobgen.com/", logo: "images/sponsors/mobgen.png"},
    {name: "NS", link: "https://www.ns.nl", logo: "images/sponsors/ns.png"},
    {name: "MyParcel", link: "https://www.myparcel.com", logo: "images/sponsors/myparcel.png"},
    {name: "Oberon", link: "https://www.oberon.nl/", logo: "images/sponsors/oberon.png"},
    {name: "Oneplanetcrowd", link: "https://www.oneplanetcrowd.com/", logo: "images/sponsors/opc.png"},
    {name: "Optimizely", link: "https://www.optimizely.com/", logo: "images/sponsors/optimizely.png"},
    {name: "PixelIndustries", link: "http://www.pixelindustries.com/nl/", logo: "images/sponsors/pixel_industries.png"},
    {name: "Practocol B.V.", link: "http://practocol.com/en/", logo: "images/sponsors/practocol.png"},
    {name: "Reelmetrics", link: "https://reelmetrics.com/contact", logo: "images/sponsors/reelmetrics.png"},
    {name: "S5 Agency World", link: "http://www.s5eurasia.com/s5-north-europe/home/", logo: "images/sponsors/s5.png"},
    {name: "Sentia", link: "https://www.sentia.com/", logo: "images/sponsors/sentia.png"},
    {name: "Simbeyond", link: "http://simbeyond.com/", logo: "images/sponsors/simbeyond.png"},
    {name: "Sky Spiral Concepts", link: "https://www.sky-spiral.com/", logo: "images/sponsors/sky_spiral_concepts.png"},
    {name: "Smartspotter", link: "http://www.smartspotter.com/", logo: "images/sponsors/smartspotter.png"},
    {name: "Smart Trackers", link: "https://www.smarttrackers.nl/", logo: "images/sponsors/smart_trackers.png"},
    {name: "Sowieso Helder", link: "https://www.sowiesohelder.nl", logo: "images/sponsors/sowieso.png"},
    {name: "Springest", link: "https://www.springest.nl/", logo: "images/sponsors/springest.png"},
    {name: "Spronq", link: "https://www.spronq.com/", logo: "images/sponsors/spronq.png"},
    {name: "Terralemon", link: "https://www.terralemon.com/", logo: "images/sponsors/terralemon.png"},
    {name: "The Main Ingredient", link: "https://themainingredient.co/", logo: "images/sponsors/tmi.png"},
    {name: "theFrontDoor", link: "http://www.thefrontdoor.nl/", logo: "images/sponsors/tfd.png"},
    {name: "Usabilla", link: "https://usabilla.com/", logo: "images/sponsors/usabilla.png"},
    {name: "UWV", link: "https://www.uwv.nl", logo: "images/sponsors/uwv.png"},
    {name: "ViriCiti", link: "http://viriciti.pr.co/", logo: "images/sponsors/viriciti.png"},
    {name: "Websend", link: "http://www.websend.nl/", logo: "images/sponsors/websend.png"},
    {name: "WeTransfer", link: "https://wetransfer.com/", logo: "images/sponsors/wetransfer.png"},
    {name: "Winkwaves", link: "https://winkwaves.com/", logo: "images/sponsors/winkwaves.png"},
    {name: "YoungCapital", link: "https://www.youngcapital.nl/", logo: "images/sponsors/young_capital.png"}
  ]

  $.each(sponsors, function(i, obj){
    $("<a>",{
      html: $("<img>", {src: obj.logo, alt: obj.name}),
      href: obj.link,
      target: "_blank",
    }).appendTo(".logos");
  });
});
