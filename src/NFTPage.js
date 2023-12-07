import Header from "./component/header/Header"
import Button from "./component/Button/Button"
import Card from "./component/Card/Card"
import wallet from "./assest/wallet.svg"
import Newsletters from "./component/newsletter/NewsLetter"
import Footer from "./component/Footer/Footer"
import image1 from "./assest/image1.svg"
import image2 from "./assest/image2.svg"
import image3 from "./assest/image3.svg"
import image4 from "./assest/imag4.svg"
const NFTPage = () => {
    const categoryCardData = [
        {image:require('./assest/back1.png'),title:"art"},
        {image:require('./assest/back2.png'),title:"Gaming"},
        {image:require('./assest/back3.png'),title:"Music"},
        {image:require('./assest/back4.png'),title:"Photography"},
        {image:require('./assest/back5.png'),title:"Vedio"},
        {image:require('./assest/back6.png'),title:"Digtal Art"},
        {image:require('./assest/back7.jpeg'),title:"Painting"},
        {image:require('./assest/back8.png'),title:"AI"}
    ]
    const sellInfo = [
        {image:image1,title:"Set up your wallet", desc:"Once you’ve set up your wallet of choice, connect it to metavoeux by clicking the wallet icon in the top right corner. Learn about the wallets we support."},
        {image:image2,title:"Create your collection", desc:"Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."},
        {image:image3,title:"Add your NFTs", desc:"Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."},
        {image:image4,title:"List them for sale", desc:"Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!"},
    ]
    const featuredNFT = [
        {image:require('./assest/back1.png'),title:"Distant Galaxy",price:"1.63 ETH", feturetype:"Animakid"},
        {image:require('./assest/back2.png'),title:"Life On Edena",price:"1.63 ETH",feturetype:"Animakid"},
        {image:require('./assest/back3.png'),title:"AstroFiction",price:"1.63 ETH",feturetype:"Animakid"},
        {image:require('./assest/back4.png'),title:"ColorfulDog 0524",price:"1.63 ETH",feturetype:"Animakid"}
    ]
    const trendingNFT = [
        {image:require('./assest/back1.png'),title:"Cherry Blossom Girl 037",price:"1.63 ETH", feturetype:"Animakid"},
        {image:require('./assest/back2.png'),title:"Dancing Robots 0987",price:"1.63 ETH",feturetype:"Animakid"},
        {image:require('./assest/back3.png'),title:"IceCream Ape ",price:"1.63 ETH",feturetype:"Animakid"},
        {image:require('./assest/back4.png'),title:"ColorfulDog 0524",price:"1.63 ETH",feturetype:"Animakid"}
    ]
    const latestNFT = [
        {image:require('./assest/back1.png'),title:"Distant Galaxy",price:"1.63 ETH", feturetype:"Animakid"},
        {image:require('./assest/back2.png'),title:"Life On Edena",price:"1.63 ETH",feturetype:"Animakid"},
        {image:require('./assest/back3.png'),title:"AstroFiction",price:"1.63 ETH",feturetype:"Animakid"},
        {image:require('./assest/back4.png'),title:"ColorfulDog 0524",price:"1.63 ETH",feturetype:"Animakid"}
    ]
    const topCreatots = [
        {image:require('./assest/avatar1.png'),title:"Keepitreal",price:"1.63 ETH"},
        {image:require("./assest/avatar2.png"),title:"DigiLab",price:"1.63 ETH"},
        {image:require("./assest/avatar3.png"),title:"GravityOne",price:"1.63 ETH"},
        {image:require("./assest/avatar4.png"),title:"Juanie",price:"1.63 ETH"},
        {image:require("./assest/avatar5.png"),title:"BlueWhale",price:"1.63 ETH"},
        {image:require("./assest/avatar6.png"),title:"mr fox",price:"1.63 ETH"},
        {image:require("./assest/avatar7.png"),title:"Shroomie",price:"1.63 ETH"},
        {image:require("./assest/avatar8.png"),title:"robotica",price:"1.63 ETH"},
        {image:require("./assest/avatar9.png"),title:"RustyRobot",price:"1.63 ETH"},
        {image:require("./assest/avatar10.png"),title:"animakid",price:"1.63 ETH"},
        {image:require("./assest/avatar11.png"),title:"Dotgu",price:"1.63 ETH"},
        {image:require("./assest/avatar12.png"),title:"Ghiblier",price:"1.63 ETH"}
    ]
    const liveAuction =[
        {image:require('./assest/live1.png'),title:"Triumphant Awakening",bidPrice:"1.63 ETH", name:"Pollaphta",profileImg:require('./assest/profile1.png')},
        {image:require('./assest/live2.png'),title:"Living Vase 01 By Lanza",bidPrice:"1.63 ETH", name:"Pollaphta",profileImg:require('./assest/profile2.png')},
        {image:require('./assest/live3.png'),title:"Triumphant Awakening",bidPrice:"1.63 ETH", name:"Pollaphta",profileImg:require('./assest/profile3.png')},
    ]
    return(
     <div className="nft-page-container">
        <Header headerType="nft"/>
        <div className="nft-banner">
            <div className="nft-desc">
                <p>Create, Buy and Sell <span>NFTs</span> on fully decentralized platform  </p>
                <div className="button-container">
                    <Button text="Create NFT"/>
                    <Button text="Sell NFT"/>
                </div>
            </div>
            <div className="nft-image">
                <img src={require('./assest/background2.png')}/>
            </div>
        </div>
        <div className="parent-cards-container">
            <h6 className="card-title">Categories</h6>
        <Card cardData={categoryCardData} cartStyle="1" price={false}/>
        </div>
        <div className="parent-card-container1">
        <h6 className="card-title">Create and sell your NFTs</h6>
        <span className="custom-wdith-desc">Dedicated, flexible spaces for meetings, brainstorms, team hangs, and everything in between.</span>
        <Card cardData={sellInfo} cartStyle="2"/>
        </div>
        <div className="parent-card-container1">
        <h6 className="card-title">Featured NFTs</h6>
        <Card cardData={featuredNFT} cartStyle="1" price={true}/>
        </div>
        <div className="parent-card-container1">
        <h6 className="card-title">Trending NFTs</h6>
        <Card cardData={trendingNFT} cartStyle="1" price={true}/>
        </div>
        <div className="parent-card-container1">
        <h6 className="card-title">Latest NFTs</h6>
        <Card cardData={latestNFT} cartStyle="1" price={true}/>
        </div>
        <div className="parent-cards-container padding-50T100">
            <div style={{display:"inline-block",float:"left",marginBottom:"62px"}}><h6 className="card-title" style={{textAlign:"left"}}>Top Creators</h6>
            <span className="card-desc">Checkout Top Rated Creators on the NFT Marketplace</span></div>
            <Button text="Create NFT" style={{float:"right"}}buttonicon={wallet}/>
        <Card cardData={topCreatots} cartStyle="3" price={false} />
        </div>
        <div className="parent-cards-container ">
            <div style={{textAlign:"center"}}><h6 className="card-title" >Live Auction</h6>
            <span className="card-desc1 custom-wdith-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo ac morbi purus quis elit in vulputate.</span></div>
        <Card cardData={liveAuction} cartStyle="4" price={false} />
        <div style={{display:"flex",justifyContent:"center"}}><Button text="Bid Now" style={{marginTop:"40px"}}/></div>
        </div>
       <Newsletters />
       <Footer />
     </div>
    )
}
export default NFTPage