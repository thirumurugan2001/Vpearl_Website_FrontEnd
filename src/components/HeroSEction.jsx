import Button from './Button';

const HeroSection = ({ title, buttonText, images_url, onButtonClick }) => {
    return (
      <div className="relative w-full h-[400px] bg-black" style={{ marginTop: '60px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${images_url})`
          }}
        ></div>  
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold">{title}</h1>
          <div className="w-16 h-[2px] bg-pink-500 mt-2 mb-4"></div>          
          <Button onClick={onButtonClick}>{buttonText}</Button> 
        </div>
      </div>
    );
};

export default HeroSection;