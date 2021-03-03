import "./App.css";
import "font-awesome/css/font-awesome.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Tagbar from "./components/tagbar";

function App() {
  const data = [
    {
      name: "Guru Randhawa",
      music: "Punjabi Pop",
      image:
        "https://www.ludhianalivenews.com/wp-content/uploads/2019/08/Guru-Randhawa.jpg",
    },
    {
      name: "Jass Manak",
      music: "Punjabi Pop",
      image:
        "https://punjabistarlive.com/wp-content/uploads/2020/09/Jass-Manak-e1599211541387.jpg",
    },
    {
      name: "Arman Malik",
      music: "Folk",
      image: "https://images.indianexpress.com/2020/11/Armaan-Malik-1200.jpg",
    },
    {
      name: "Charlie Puth",
      music: "Pop",
      image:
        "https://pyxis.nymag.com/v1/imgs/c88/ef6/0ee3447ad98c409357e0a1b002481d0e9e-01-charlie-puth.rsquare.w700.jpg",
    },
  ];

  const reviews = [
    {
      name: "Hellen Ford",
      city: "LOS ANGELES",
      country: "USA",
      text:
        "Hrknj mnjbds jdbjb jdbsjd jbjamj jbdjbsm jdbj d sjdnsj ndkkdnm si jbdm jpwjwnw dwowhq dsknd kbjn sbjsbaj sskan there wiull be a way to hten.. ",
      flag:
        "https://images-na.ssl-images-amazon.com/images/I/61gnrswHuBL._AC_SL1024_.jpg",
      person:
        "https://i.pinimg.com/originals/fe/d1/88/fed18845526fc6f412986e2d20029b5b.jpg",
    },
    {
      name: "R P Chandrashekar",
      city: "CHENNAI",
      country: "INDIA",
      text:
        "Hrknj mnjbds jdbjb jdbsjd jbjamj jbdjbsm jdbj d sjdnsj ndkkdnm si jbdm jpwjwnw dwowhq dsknd kbjn sbjsbaj sskan there wiull be a way to hten.. ",
      flag: "https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg",
      person:
        "https://st.depositphotos.com/2702761/3311/i/950/depositphotos_33115475-stock-photo-man-with-his-arms-crossed.jpg",
    },
    {
      name: "Isaac Kritoleski",
      city: "SOCHI",
      country: "RUSSIA",
      text:
        "Hrknj mnjbds jdbjb jdbsjd jbjamj jbdjbsm jdbj d sjdnsj ndkkdnm si jbdm jpwjwnw dwowhq dsknd kbjn sbjsbaj sskan there wiull be a way to hten.. ",
      flag:
        "https://i1.wp.com/www.youngpioneertours.com/wp-content/uploads/2020/03/russian-flag-russian-flag-russia-flag-of-russia.jpg?fit=1332%2C850&ssl=1",
      person:
        "https://blogs.elenasmodels.com/wp-content/uploads/2018/04/western-man.jpg",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Tagbar data={data} reviews={reviews} />
    </div>
  );
}

export default App;
