import './App.css';
import Brands from './Components/Brands/Brands';
import CustomerTest from './Components/CustomerTest/CustomerTest';
import FirstComp from './Components/FirstComp/FirstComp';
import HiringAudit from './Components/HiringAudit/HiringAudit';
import HiringPlatform from './Components/HiringPlatform/HiringPlatform';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import NewComponent from './Components/NewComponents/NewComponent';
import Pricing from './Components/Pricing/Pricing';
import Questions from './Components/Questions/Questions';
import SuccessStory from './Components/SuccessStory/SuccessStory';
import SystemOperates from './Components/SystemOperates/SystemOperates';
import TalentAssistements from './Components/TalentAssistements/TalentAssistements';


function App() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <FirstComp></FirstComp>
    <Brands></Brands>
    <NewComponent></NewComponent>
    <SystemOperates></SystemOperates>
    <Pricing></Pricing>
    <TalentAssistements></TalentAssistements>
    <CustomerTest></CustomerTest>
    <HiringPlatform></HiringPlatform>
    <SuccessStory></SuccessStory>
    <Questions></Questions>
    <HiringAudit></HiringAudit>
    </>
  );
}

export default App;
