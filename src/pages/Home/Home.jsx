import './Home.css'

function Home() {
    return ( 
    <div className='home-container'>
        <h1>Introduce yourself</h1>
        <div className='content'>
        <div className='home-img'><img  src='/_multipages/human.jpg' alt="" /></div>
        <div className='info'>
            <h2>ชื่อ : วรากร มาตุเรศ</h2>
            <h2>รหัสนักศึกษา : 66049472</h2>
            <h2>คณะ : เทคโนโลยีสารสนเทศ</h2>
            <h2>สาขา : วิทยาการคอมพิวเตอร์</h2>
        </div>
        </div>
        <div className='contact'><h3>ติดต่อ : varakon.mat@spumail.net</h3></div>
    </div> );
}

export default Home;