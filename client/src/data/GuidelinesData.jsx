import andhra from "../assets/states/andhra.png";
import delhi from "../assets/states/delhi.png";
import goa from "../assets/states/goa.png";
import gujrat from "../assets/states/gujrat.png";
import haryana from "../assets/states/haryana.png";
import jk from "../assets/states/jk.png";
import karnataka from "../assets/states/karnataka.png";
import kerala from "../assets/states/kerala.png";
import maharashtra from "../assets/states/maharashtra.png";
import odisha from "../assets/states/odisha.png";
import tamilNadu from "../assets/states/tamilNadu.png";
import andhra2021 from "../assets/states/pdfs/andhra2021.pdf";
import delhi2020 from "../assets/states/pdfs/delhi2020.pdf";
import delhi2021 from "../assets/states/pdfs/delhi2021.pdf";
import delhi2023a from "../assets/states/pdfs/delhi2023a.pdf";
import delhi2023b from "../assets/states/pdfs/delhi2023b.pdf";
import delhi2023c from "../assets/states/pdfs/delhi2023c.pdf";
import delhi2023d from "../assets/states/pdfs/delhi2023d.pdf";
import goa2021 from "../assets/states/pdfs/goa2021.pdf";
import goa2023 from "../assets/states/pdfs/goa2023.pdf";
import gujrat2021 from "../assets/states/pdfs/gujrat2021.pdf";
import gujrat2023 from "../assets/states/pdfs/gujrat2023.pdf";
import haryana2020 from "../assets/states/pdfs/haryana2020.pdf";
import jk2021a from "../assets/states/pdfs/jk2021a.pdf";
import jk2021b from "../assets/states/pdfs/jk2021b.pdf";
import jk2024 from "../assets/states/pdfs/jk2024.pdf";
import karnataka2021 from "../assets/states/pdfs/karnataka2021.pdf";
import karnataka2023 from "../assets/states/pdfs/karnataka2023.pdf";
import karnataka2024 from "../assets/states/pdfs/karnataka2024.pdf";
import kerala2020 from "../assets/states/pdfs/kerala2020.pdf";
import kerala2023 from "../assets/states/pdfs/kerala2023.pdf";
import maharashtra2023 from "../assets/states/pdfs/maharashtra2023.pdf";
import odisha2023 from "../assets/states/pdfs/odisha2023.pdf";
import tamilnadu2020a from "../assets/states/pdfs/tamilnadu2020a.pdf";
import tamilnadu2020b from "../assets/states/pdfs/tamilnadu2020b.pdf";
import tamilnadu2021a from "../assets/states/pdfs/tamilnadu2021a.pdf";
import tamilnadu2021b from "../assets/states/pdfs/tamilnadu2021b.png";
import tamilnadu2021c from "../assets/states/pdfs/tamilnadu2021c.pdf";
import tamilnadu2022 from "../assets/states/pdfs/tamilnadu2022.pdf";

const GuidelinesData = [
  {
    id: 1,
    state: "Andhra Pradesh",
    icon: andhra,
    files: [{ year: "2021", file: andhra2021 }],
  },
  {
    id: 2,
    state: "Delhi",
    icon: delhi,
    files: [
      { year: "2023-A", file: delhi2023a },
      { year: "2023-B", file: delhi2023b },
      { year: "2023-C", file: delhi2023c },
      { year: "2023-D", file: delhi2023d },
      { year: "2021", file: delhi2021 },
      { year: "2020", file: delhi2020 },
    ],
  },
  {
    id: 3,
    state: "Goa",
    icon: goa,
    files: [
      { year: "2023", file: goa2023 },
      { year: "2021", file: goa2021 },
    ],
  },
  {
    id: 4,
    state: "Gujarat",
    icon: gujrat,
    files: [
      { year: "2023", file: gujrat2023 },
      { year: "2021", file: gujrat2021 },
    ],
  },
  {
    id: 5,
    state: "Haryana",
    icon: haryana,
    files: [{ year: "2020", file: haryana2020 }],
  },
  {
    id: 6,
    state: "Jammu & Kashmir",
    icon: jk,
    files: [
      { year: "2024", file: jk2024 },
      { year: "2021-A", file: jk2021a },
      { year: "2021-B", file: jk2021b },
    ],
  },
  {
    id: 7,
    state: "Karnataka",
    icon: karnataka,
    files: [
      { year: "2024", file: karnataka2024 },
      { year: "2023", file: karnataka2023 },
      { year: "2021", file: karnataka2021 },
    ],
  },
  {
    id: 8,
    state: "Kerala",
    icon: kerala,
    files: [
      { year: "2023", file: kerala2023 },
      { year: "2020", file: kerala2020 },
    ],
  },
  {
    id: 9,
    state: "Maharashtra",
    icon: maharashtra,
    files: [{ year: "2023", file: maharashtra2023 }],
  },
  {
    id: 10,
    state: "Odisha",
    icon: odisha,
    files: [{ year: "2023", file: odisha2023 }],
  },
  {
    id: 11,
    state: "Tamil Nadu",
    icon: tamilNadu,
    files: [
      { year: "2022", file: tamilnadu2022 },
      { year: "2021-A", file: tamilnadu2021a },
      { year: "2021-B", file: tamilnadu2021b },
      { year: "2021-C", file: tamilnadu2021c },
      { year: "2020-A", file: tamilnadu2020a },
      { year: "2020-B", file: tamilnadu2020b },
    ],
  },
];

export default GuidelinesData;
