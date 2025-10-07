const albums = [
  {
    title: "Théo Laura PS",
    cover: "/public/portfolio/theo_laura_ps.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/theo-laura-ps/",
  },
  {
    title: "Sofia PS",
    cover: "/public/portfolio/sofia_ps.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/sofia-ps/",
  },
  {
    title: "Sofia Nice",
    cover: "/public/portfolio/sofia.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/sofia-nice/",
  },
  {
    title: "Theo&Laura",
    cover: "/public/portfolio/theo&laura.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/theo-laura/",
  },
  {
    title: "My gorgeous bff in Georgia",
    cover: "/public/portfolio/bff.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/my-gorgeous-bff-in-georgia/",
  },
  {
    title: "Beauty",
    cover: "/public/portfolio/beauty.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/beauty/",
  },
  {
    title: "Hanna Fors",
    cover: "/public/portfolio/hanna_fors.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/hanna-fors/",
  },
  {
    title: "Anastasiia Lymar",
    cover: "/public/portfolio/anastasiia_lymar.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/anastasiia-lymar/",
  },
  {
    title: "Marina Bondar",
    cover: "/public/portfolio/marina_bondar.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/marina-bondar/",
  },
  {
    title: "Blackline studio",
    cover: "/public/portfolio/blackline_studio.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/blackline-studio/",
  },
  {
    title: "Les secrets des sourcils",
    cover: "/public/portfolio/les_secrets.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/les-secret-des-sourcils/",
  },
  {
    title: "Maidan Sofia PMU",
    cover: "/public/portfolio/maidan_sofia_pmu.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/maidan-sofia-pmu/",
  },
  {
    title: "Salone Rossela",
    cover: "/public/portfolio/salone_rossella.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/salone-rossella/",
  },
  {
    title: "Valeria Martialova",
    cover: "/public/portfolio/valeria_martianova.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/valeria-martianova/",
  },
  {
    title: "Andre Francu & Elena Orac",
    cover: "/public/portfolio/andrea&elena.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/andrea-francu/",
  },
  {
    title: "Parni Beauty",
    cover: "/public/portfolio/parni_beauty.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/parni-beauty/",
  },
  {
    title: "StudioMaryne leader",
    cover: "/public/portfolio/stydiomaryne_leader.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/studiomaryne-leader/",
  },
  {
    title: "Anda Grammatico",
    cover: "/public/portfolio/anda_grammatico.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/anda-grammatico/",
  },
  {
    title: "Sofia",
    cover: "/public/portfolio/sofia.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/sofia/",
  },
  {
    title: "Svetlana Funt",
    cover: "/public/portfolio/svetlana_funt.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/svetlana-funt/",
  },
  {
    title: "Iface by Christina",
    cover: "/public/portfolio/iface_by_christina.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/iface-by-christina/",
  },
  {
    title: "Melissa Melki",
    cover: "/public/portfolio/melissa_melki.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/melissa-melki/",
  },
  {
    title: "Anna Deliatynchuk",
    cover: "/public/portfolio/anna_deliatynchuk.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/anna-deliatynchuk/",
  },
  {
    title: "Wulop 2025",
    cover: "/public/portfolio/wulop_2025.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/wulop-2025/",
  },
  {
    title: "Emma & Julien Bandol",
    cover: "/public/portfolio/emma&julien.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/emma-julien-bandol/",
  },
  {
    title: "14 Juillet 4 RMAT",
    cover: "/public/portfolio/14juillet.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/14-juillet-4-rmat/",
  },
  {
    title: "Laura",
    cover: "/public/portfolio/laura.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/lara/",
  },
  {
    title: "Traiteur",
    cover: "/public/portfolio/traiteur.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/traiteur/",
  },
  {
    title: "Zoe robe rose",
    cover: "/public/portfolio/zoe_robe_rose.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/zoe-robe-rose/",
  },
  {
    title: "Julia",
    cover: "/public/portfolio/julia.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/julia/",
  },
  {
    title: "Famille de Catani",
    cover: "/public/portfolio/famille_de_catani.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/famille-de-catani/",
  },
  {
    title: "PS",
    cover: "/public/portfolio/ps.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/ps/",
  },
  {
    title: "Brunch",
    cover: "/public/portfolio/brunch.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/brunch/",
  },
  {
    title: "Emma&Julien",
    cover: "/public/portfolio/emma&julien2.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/emma-julien/",
  },
  {
    title: "Zoe payette PS",
    cover: "/public/portfolio/zoe_payette_ps.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/zoe-payette-ps/",
  },
  {
    title: "Zoe",
    cover: "/public/portfolio/zoe.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/zoe/",
  },
  {
    title: "Lea PS",
    cover: "/public/portfolio/lea_ps.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/lea-ps/",
  },
  {
    title: "Naelle PS",
    cover: "/public/portfolio/naelle_ps.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/naelle-p/",
  },
  {
    title: "Alex",
    cover: "/public/portfolio/alex.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/alex/",
  },
  {
    title: "Naelle & Lea",
    cover: "/public/portfolio/naelle&lea.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/naelle-lea/",
  },
  {
    title: "Lea",
    cover: "/public/portfolio/lea.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/lea1/",
  },
  {
    title: "Naelle",
    cover: "/public/portfolio/naelle.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/naelle/",
  },
  {
    title: "Same Amrani",
    cover: "/public/portfolio/same_amrani.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/sam/",
  },
  {
    title: "Aloe & BF",
    cover: "/public/portfolio/aloe&bf.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/couple/",
  },
  {
    title: "Lilia",
    cover: "/public/portfolio/lilia.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/lilia/",
  },
  {
    title: "Benjamin Saint Laurent",
    cover: "/public/portfolio/benjamin.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/benjamin-saint-laurent/",
  },
  {
    title: "Lea",
    cover: "/public/portfolio/lea2.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/lea/",
  },
  {
    title: "Diana & Ihor Ireland",
    cover: "/public/portfolio/diana&ihor.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/diana-ihor-ireland/",
  },
  {
    title: "Santa visit",
    cover: "/public/portfolio/santa_visit.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/santa-visit/",
  },
  {
    title: "Christian",
    cover: "/public/portfolio/christian.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/christian/",
  },
  {
    title: "Solomiya",
    cover: "/public/portfolio/solomiya.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/solomiya/",
  },
  {
    title: "Iryna Uman",
    cover: "/public/portfolio/iryna_uman.jpg",
    link: "https://66533f2920c738-58149857.gallery.photo/gallery/iryna-uman/",
  },
];

export default albums;
