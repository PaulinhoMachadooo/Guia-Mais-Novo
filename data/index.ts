import { Category } from "../types/category";
import { Product } from "../types/product";

type Data = {
  filter(arg0: (val: any) => boolean): unknown;
  categories: Category[];
  products: Product[];
};
export const data: Data = {
  categories: [
    {
      id: 1,
      title: "Academia",
    },
    {
      id: 2,
      title: "Açougue",
    },
    {
      id: 3,
      title: "Advogado",
    },
    {
      id: 4,
      title: "Agência de Turismo",
    },
    {
      id: 5,
      title: "Água e Gás",
    },
    {
      id: 6,
      title: "Alarme e Segurança",
    },
    {
      id: 7,
      title: "Aluguel de Equipamentos",
    },
    {
      id: 8,
      title: "Arquiteto",
    },
    {
      id: 9,
      title: "Arte e Cultura",
    },
    {
      id: 10,
      title: "Artigos de Festa",
    },
    {
      id: 11,
      title: "Associação e Cooperativa",
    },
    {
      id: 12,
      title: "Auto Elétrica",
    },
    {
      id: 13,
      title: "Auto Escola",
    },
    {
      id: 14,
      title: "Auto Peças",
    },
    {
      id: 15,
      title: "Barbearia",
    },
    {
      id: 16,
      title: "Bar e Restaurante",
    },
    {
      id: 161,
      title: "Bebida",
    },
    {
      id: 17,
      title: "Beleza e Estética",
    },
    {
      id: 18,
      title: "Borracharia",
    },
    {
      id: 19,
      title: "Buffet",
    },
    {
      id: 20,
      title: "Cabeleireiro",
    },
    {
      id: 21,
      title: "Cama Mesa e Banho",
    },
    {
      id: 22,
      title: "Cartório",
    },
    {
      id: 23,
      title: "Casa e Decoração",
    },
    {
      id: 24,
      title: "Chaveiro",
    },
    {
      id: 25,
      title: "Clínica e Laboratório",
    },
    {
      id: 26,
      title: "Clínica Veterinária",
    },
    {
      id: 27,
      title: "Colégio e Escola",
    },
    {
      id: 271,
      title: "Comida",
    },
    {
      id: 28,
      title: "Contabilidade",
    },
    {
      id: 29,
      title: "Dentista",
    },
    {
      id: 30,
      title: "Despachante",
    },
    {
      id: 31,
      title: "Doces e Salgados",
    },
    {
      id: 32,
      title: "Educação",
    },
    {
      id: 33,
      title: "Eletro Doméstico",
    },
    {
      id: 34,
      title: "Encanador",
    },
    {
      id: 35,
      title: "Escola de Idiomas",
    },
    {
      id: 36,
      title: "Faculdade",
    },
    {
      id: 37,
      title: "Farmácia",
    },
    {
      id: 38,
      title: "Fisioterapeuta",
    },
    {
      id: 39,
      title: "Floricultura",
    },
    {
      id: 40,
      title: "Foto e Filmagens",
    },
    {
      id: 41,
      title: "Fretes e Mudança",
    },
    {
      id: 42,
      title: "Funerária",
    },
    {
      id: 43,
      title: "Funilaria e Pintura",
    },
    {
      id: 44,
      title: "Gráfica",
    },
    {
      id: 45,
      title: "Hotel e Pousada",
    },
    {
      id: 46,
      title: "Imobiliária",
    },
    {
      id: 47,
      title: "Internet",
    },
    {
      id: 48,
      title: "Jardinagem",
    },
    {
      id: 49,
      title: "Lanches",
    },
    {
      id: 50,
      title: "Lava Rápido",
    },
    {
      id: 51,
      title: "Loja de Calçados",
    },
    {
      id: 52,
      title: "Loja de Informática",
    },
    {
      id: 53,
      title: "Loja de Presentes e Ultensílios",
    },
    {
      id: 54,
      title: "Loja de Roupas",
    },
    {
      id: 55,
      title: "Marcenaria",
    },
    {
      id: 56,
      title: "Materiais de Construção",
    },
    {
      id: 57,
      title: "Médicos e Saúde",
    },
    {
      id: 58,
      title: "Noivas e Casamentos",
    },
    {
      id: 59,
      title: "OAB",
    },
    {
      id: 60,
      title: "Oficina de Carro",
    },
    {
      id: 61,
      title: "Oficina de Moto",
    },
    {
      id: 62,
      title: "Ótica e Relojoaria",
    },
    {
      id: 63,
      title: "Padaria",
    },
    {
      id: 64,
      title: "Papelaria",
    },
    {
      id: 65,
      title: "Peixaria",
    },
    {
      id: 66,
      title: "Perfumes e Cosméticos",
    },
    {
      id: 67,
      title: "Pet Shop",
    },
    {
      id: 68,
      title: "Piscina e Jardim",
    },
    {
      id: 69,
      title: "Pizzaria",
    },
    {
      id: 70,
      title: "Posto de Conbustível",
    },
    {
      id: 71,
      title: "Restaurante",
    },
    {
      id: 72,
      title: "Salão de Beleza",
    },
    {
      id: 73,
      title: "Supermercado",
    },
    {
      id: 74,
      title: "Tatuagens",
    },
  ],
  products: [
    {
      id: 4 /*Produto*/,
      idCategory: 1 /*Categoria */,
      image: "https://abrir.link/WHmAZ",
      title: "NO PAIN, NO GAIN",
      uriInstagram: "https://www.instagram.com",
      imgInst: "https://encurtador.com.br/gUGdZ",
      uriWhatsapp: "https://api.whatsapp.com/send?phone=5515996646930",
      imgWhat: "https://encurtador.com.br/Sw6Hl",
      uriFace: "https://www.facebook.com/?locale=pt_BR",
      imgFace: "https://encurtador.com.br/dJnQp",
      uriTel: "+5515996524975",
      imgTel: "https://encurtador.com.br/gLdtY",
      uriMaps: "geo: -23.5868031,-46.6847322, 0.01, 0.01",
      imgMaps: "https://abrir.link/ngbAQ",
      horasTXT:"HORÁRIOS DE FUNCIONAMENTOS",
      horasDescription1: "SEGUNDA A SEXTA 07:00 ás 21:00",
      horasDescription2: "DOMINGOS E FERIADOS FECHADO",
    },

    {
      id: 9,
      idCategory: 1,
      image: "https://encurtador.com.br/bJeen",
      title: "MAROMBA",
      uriInstagram: "home",
      imgInst: "https://abrir.link/hJWAN",
      uriWhatsapp: "home",
      imgWhat: "https://abrir.link/BDlbu",
      uriFace: "home",
      imgFace: "https://abrir.link/ERzJQ",
      uriTel: "home",
      imgTel: "https://abrir.link/WfAqr",
      uriMaps: ("/home"),
      imgMaps: "https://abrir.link/awgnI",
      horasTXT:"",
      horasDescription1: "",
      horasDescription2: "",
    },
    /* {
      id: 6,
      idCategory: 1,
      image: "https://picsum.photos/id/5/200/200",
      title: 'Tablet 10"',
      description: "Tela brilhante, ideal para entretenimento e produtividade.",
    },
    {
      id: 5,
      idCategory: 1,
      image: "https://picsum.photos/id/4/200/200",
      title: "Smartwatch",
      description: "Monitoramento de saúde e notificações inteligentes.",
    },
    {
      id: 8,
      idCategory: 1,
      image: "https://picsum.photos/id/7/200/200",
      title: "Console X",
      description: "Gráficos avançados, ampla biblioteca de jogos.",
    },
    {
      id: 3,
      idCategory: 1,
      image: "https://picsum.photos/id/2/200/200",
      title: "Fone Bluetooth",
      description: "Som cristalino, cancelamento de ruído ativo.",
    },
    {
      id: 1,
      idCategory: 1,
      image: "https://picsum.photos/id/0/200/200",
      title: "Smartphone X1",
      description: "Alta performance, tela AMOLED e câmera avançada.",
    },
    {
      id: 2,
      idCategory: 1,
      image: "https://picsum.photos/id/1/200/200",
      title: "Laptop Pro",
      description: "Design elegante, processador i7, 16GB RAM.",
    },
    {
      id: 7,
      idCategory: 1,
      image: "https://picsum.photos/id/6/200/200",
      title: 'TV LED 50"',
      description: "Imagem vívida, resolução 4K, serviços de streaming.",
    },
    {
      id: 10,
      idCategory: 1,
      image: "https://picsum.photos/id/9/200/200",
      title: "Drone Pro",
      description: "Voo preciso, câmera HD, controle intuitivo.",
    },*/
  ],
  filter: function (arg0: (val: any) => boolean): unknown {
    throw new Error("Function not implemented.");
  },
};
