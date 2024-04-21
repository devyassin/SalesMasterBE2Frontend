import {
  DashboardIcon,
  ClientIcon,
  VenteIcon,
  InventaireIcon,
  FactureIcon,
} from "../assets";

export const categories = [
  {
    name: "Dashboard",
    hover: "/dashboard",
    path: "/dashboard",
    icon: DashboardIcon,
  },
  {
    name: "Clients",
    path: "/clients",
    icon: ClientIcon,
  },
  {
    name: "Ventes",
    path: "/ventes",
    icon: VenteIcon,
  },
  {
    name: "Inventaire",
    path: "/Inventaire",
    icon: InventaireIcon,
  },
  {
    name: "Facturation",
    path: "/facturation",
    icon: FactureIcon,
  },
];
