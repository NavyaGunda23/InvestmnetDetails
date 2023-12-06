// import logo from './logo.svg';
import Header from './component/header/Header';
import Banner from './component/Banner/Banner';
import SecondaryBanner from "./component/secondaryBanner/SecondaryBanner"
import VoeuxLogo from "./assest/voeux-logo.svg"
import Contact from "./assest/contact.svg"
import './App.css';

function App() {
  const investmentInformation = [
    {text:"$2M",title:"Investment Required"},
    {text:"$2M",title:"Total Investment Allocated"},
    {text:"7 Days",title:"Duration"}
  ]
  const FormStatus = [
    {text:"Completed",title:"status",tag:true},
    {text:"5",title:"Max Phase"},
  ]
  const tokenInformation=[
    {text:"Voeux",title:"Investmnet Required",image:true,imageURL:VoeuxLogo},
    {text:"Voeux",title:"Investmnet Required",image:true,imageURL:VoeuxLogo},
  ]
  const financial=[
    {text:"100%",title:"APY Field"}
  ]
  return (
    <div className="Details-page-container">
      <Header />
      <Banner />
      <SecondaryBanner headerTitle="Investment Information" data={investmentInformation} buttonRequired={true} buttonText="Invest Now"/>
      <SecondaryBanner headerTitle="Farm Status" data={FormStatus} buttonRequired={false} />
      <SecondaryBanner headerTitle="Token Information" data={tokenInformation} buttonRequired={false} />
      <SecondaryBanner headerTitle="Financials & Location" data={financial} buttonRequired={false} />
      <div className='contact-container'>
        <img src={Contact} />
        <p className='contact-info'>Feel free to contact our manager </p>
        <a> 0x872d068c25511be88c1f5990c53eeffcdf46c9b4</a>
        <p className='contact-desc'>for any additional Information or Inquiries Thankyou for considering my farm for your investment
we are looking for fruitful Information</p>
      </div>

    </div>
  );
}

export default App;
