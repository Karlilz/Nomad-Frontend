// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
// import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import {Route, Routes} from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import MainPage from './pages/MainPage';
import PostShowPage from './pages/PostShowPage';
import CreatePost from  './pages/CreatePost'
import WelcomePage from './pages/WelcomePage';
import ProfilePage from './pages/ProfilePage';
import { showLoader} from "./loaders"
// import UpdatePost from './pages/UpdatePost';
import AboutPage from './pages/AboutPage';
import { useEffect, useState } from 'react';
import AuthenticatorRoute from './components/AuthenticatorRoute';
import PostEditPage from './pages/PostEditPage';
// import { deleteAction } from './action';


function App() {
  const seedData = [
    {_id:'1', title: 'Exploring the Stunning Beaches of Bali', username: 'Traveler123', location: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFsaSUyMGJlYWNofGVufDB8fDB8fHww&w=1000&q=80', caption: 'Golden sands and crystal clear waters at the beautiful beaches in Bali.'},
    {_id:'2', title: "A Trip to the Enchanting Santorini",username: "WanderlustElla", location: "Santorini, Greece", image: "https://www.strogilisantorini.com/blog/user/pages/01.home/20.10-best-santorini-blue-domes-churches/santorini-blue-domes.jpg", caption: "Sunset over the iconic blue-domed churches in Santorini."},
    {_id:'3', title: "Hiking Adventures in the Swiss Alps", username: "MountainExplorer", location: "Swiss Alps, Switzerland", image: "https://images.squarespace-cdn.com/content/v1/5c4645722714e56a73cc0554/1612894701051-RAWXKRH78H1219CI83FU/Berner+Oberland+Swiss+Alps+Hiking.jpg", caption: "Majestic views from the trails of the Swiss Alps."},
    {_id:'4', title: "Cultural Discoveries in Kyoto, Japan", username: "CultureTraveler", location: "Kyoto, Japan", image: "https://www.thewanderinglens.com/wp-content/uploads/2018/03/BLOG-HEADER.jpg", caption: "Serene moments at a traditional temple in Kyoto."},
    {_id:'5', title: "Safari Adventure in the Heart of Africa", username: "WildlifeLover", location: "Serengeti National Park, Tanzania", image: "https://static.toiimg.com/thumb/msid-92721827,width-748,height-499,resizemode=4,imgsize-132048/.jpg", caption: "Up close with Africa's magnificent wildlife."},
    {_id:'6', title: "Cityscape Views from New York City", username: "UrbanExplorer", location: "New York City, USA", image: "https://www.ubm-development.com/magazin/wp-content/uploads/2021/02/Sarcostyle-Tower-2-1024x576.jpg", caption: "The breathtaking skyline of the Big Apple."},
    {_id:'7', title: "Island Paradise in the Maldives", username: "IslandDreamer", location: "Maldives", image: "https://www.theadventurousflashpacker.com/wp-content/uploads/2018/08/70E4F074-F932-4D78-9B8F-55E384E6984F-e1543653419224.jpeg", caption: "Overwater bungalows in the Maldives, a slice of heaven on Earth."},
    {_id:'8', title: "Cruising the Norwegian Fjords", username: "FjordAdventures", location: "Norwegian Fjords, Norway", image: "https://blog.firstclasssailing.com/wp-content/uploads/2022/03/Fjords-Sailing.jpg", caption: "Sailing through the dramatic landscapes of the Norwegian Fjords."},
    {_id:'9', title: "Historical Wonders of Rome", username: "HistoryBuff", location: "Rome, Italy", image: "https://www.getaway.co.za/wp-content/uploads/2023/06/GettyImages-1194899511-jpg.webp", caption: "The iconic Colosseum in the heart of Rome."},
    {_id:'10', title: "Trekking the Inca Trail to Machu Picchu", username: "IncaExplorer", location: "Machu Picchu, Peru", image: "https://blog.goway.com/globetrotting/wp-content/uploads/2016/08/Machu-Picchu.jpg", caption: "Unforgettable moments at the ancient Inca citadel."},
    {_id:'11',title: "Cherry Blossom Delights in Tokyo", username: "CherryBlossomFan", location: "Tokyo, Japan", image: "https://media.cntraveler.com/photos/5c3f46c2a5c1d51f43a9d220/4:3/w_4000,h_3000,c_limit/Japan_Cherry-Blossoms_GettyImages-179989245.jpg", caption: "Sakura season in full bloom in Tokyo, Japan."},
    {_id:'12', title: "Sunrise Serenity at the Grand Canyon", username: "CanyonChaser", location: "Grand Canyon, USA", image: "https://images.fineartamerica.com/images-medium-large/sunrise-at-cape-royal-grand-canyon-john-reckleff.jpg", caption: "The Grand Canyon bathed in the colors of sunrise."},
    {_id:'13', title: "Enchanting Venice Canals", username: "VeniceExplorer", location: "Venice, Italy", image: "https://res.cloudinary.com/triplouindia/images/w_1024,h_576,c_scale/f_auto,q_auto/v1687636640/kit-suman-5mcnzeSHFvE-unsplash/kit-suman-5mcnzeSHFvE-unsplash.jpg?_i=AA", caption: "Gondolas gliding through the picturesque canals of Venice."},
    {_id:'14', title: "Cultural Immersion in Marrakech", username: "MarrakechTraveler", location: "Marrakech, Morocco", image: "https://i0.wp.com/imthinkingofretiring.com/wp-content/uploads/2023/03/iStock-1378464594.jpg?fit=1024%2C683&ssl=1", caption: "Vibrant scenes at Jemaa el-Fna market in Marrakech."},
    {_id:'15', title: "Island Paradise in Bali", username: "BaliDreamer", location: "Bali, Indonesia", image: "https://urbandiaries.in/wp-content/uploads/2017/06/276b.jpg", caption: "Ulun Danu Beratan Temple surrounded by Lake Bratan in Bali."},
    {_id:'16', title: "Trekking in the Himalayas", username: "HimalayaAdventures", location: "Himalayas, Nepal", image: "https://www.nepaltrekkinginhimalaya.com/images/package/gallery/e5DaM-ell_hero.jpg", caption: "Majestic Mount Everest in the Himalayas."},
    {_id:'17', title: "Romantic Seine River Cruise", username: "ParisRomantic", location: "Paris, France", image: "https://i0.wp.com/emilyembarks.com/wp-content/uploads/2023/06/Untitled-design-2023-06-15T120932.560.jpg?fit=1200%2C768&ssl=1", caption: "A leisurely cruise along the Seine River with views of Paris landmarks."},
    {_id:'18', title: "Desert Adventure in Dubai", username: "DubaiExplorer", location: "Dubai, United Arab Emirates", image: "https://hblimg.mmtcdn.com/content/hubble/img/dubai/mmt/activities/m_activities_dubai_dubai_desert_safari_3_l_466_699.jpg", caption: "Thrilling desert safari experience in the Dubai desert."},
    {_id:'19',title: "Historic Sites of Athens", username: "AthensHistorian", location: "Athens, Greece", image: "https://santorinidave.com/wp-content/uploads/2022/09/athens-archaeology-sites.jpeg", caption: "The iconic Acropolis of Athens, a symbol of ancient Greece."},
    {_id:'20', title: "Exploring the Great Wall", username: "GreatWallTrekker", location: "Great Wall of China, China", image: "https://blog.contexttravel.com/wp-content/uploads/2015/07/7567878376_24d27511c3_o.jpg", caption: "Walking along the magnificent Great Wall of China."},
    {_id:'21', title: "Serene Lakeside Retreat", username: "LakesideEscapes", location: "Lake Tahoe, USA", image: "https://www.housedigest.com/img/gallery/25-serene-lakeside-homes-you-can-rent-on-airbnb/l-intro-1637761982.jpg", caption: "Peaceful moments by the stunning Emerald Bay of Lake Tahoe."},
    {_id:'22',title: "Cruising the Amazon River", username: "AmazonExplorer", location: "Amazon Rainforest, Brazil", image: "https://www.aquaexpeditions.com/wp-content/uploads/2018/11/skiffs.jpg", caption: "Navigating the meandering waters of the Amazon River."}
  ];

  const URL="https://nomad-vt3u.onrender.com"
  // const URL="http://localhost:4000"

  const deletePost = pId => { 
    const foundPost = posts?.filter((post) => post._id !== pId);
    console.log(posts)
    setPost (post => [...foundPost])
  }

  const [user, setUser] = useState(null);

  const [posts, setPost] = useState ([]) 
  useEffect (() => {
    const loadData = async () => {
    const response = await fetch(URL+'/post')
    const travelblog = await response.json()
    console.log(travelblog); 
    setPost ([...travelblog, ...seedData])
  }
  loadData()
  }, [])

const setAllPosts = p => {setPost([...posts, p])}

  return (
    <Routes>
      {/* <Route path="/" element={<Nav />} /> */}
      <Route path="/" element={<WelcomePage />} />
      {/* <Route path="/nomad" element={<WelcomePage />} /> */}
      <Route path="/login" element={<LoginPage setUser={setUser}/>} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/nomad" element={<AuthenticatorRoute user={user}> <MainPage Nav={Nav} user={user} setUser={setUser} posts={posts} /> </AuthenticatorRoute>} />
      <Route path="/posts/:index" element={<PostShowPage user={user} setUser={setUser} posts={posts} Header={Header} />} />
      <Route path="/nomad/create" element={<CreatePost user={user} setAllPosts={setAllPosts} posts={posts} />} />
      <Route path="/nomad/profile" element={<AuthenticatorRoute user={user}> <ProfilePage posts={posts} user={user} deletePost={deletePost}/> </AuthenticatorRoute>} />
      <Route path="posts/:id/edit" element={<PostEditPage setPost={setPost} posts={posts}/>} loader={showLoader}/>
      <Route path="/nomad/about" element={<AboutPage/>} />
      {/* <Route path="/nomad/delete/:id" action={deleteAction}  /> */}
    </Routes>
  );
}

export default App;