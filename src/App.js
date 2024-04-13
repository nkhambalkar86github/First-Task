import './App.css';
import Brands from './Components/Brands/Brands';
import FirstComp from './Components/FirstComp/FirstComp';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import NewComponent from './Components/NewComponents/NewComponent';
import Pricing from './Components/Pricing/Pricing';
import SystemOperates from './Components/SystemOperates/SystemOperates';


function App() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <FirstComp></FirstComp>
    <Brands></Brands>
    <NewComponent></NewComponent>
    <SystemOperates></SystemOperates>
    <Pricing></Pricing>
    </>
  );
}

export default App;
